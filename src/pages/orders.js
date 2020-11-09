/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import useAsync from 'react-use/lib/useAsync';
import { fromUnitToToken } from '@arcblock/forge-util';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

import ClickToCopy from '@arcblock/ux/lib/ClickToCopy';
import TextCollapse from '@arcblock/ux/lib/TextCollapse';
import Button from '@arcblock/ux/lib/Button';
import CodeBlock from '@arcblock/ux/lib/CodeBlock';
import DidAuth from '@arcblock/did-react/lib/Auth';
import DidAddress from '@arcblock/did-react/lib/Address';
import { LocaleContext } from '@arcblock/ux/lib/Locale/context';

import Layout from '../components/wrapper';
import api from '../libs/api';

function getChainExplorerAddress(url = '') {
  return url.replace('/api', '/node/explorer');
}

async function fetchOrders() {
  const { data: orders } = await api.get('/api/orders');
  return orders;
}

// eslint-disable-next-line react/prop-types
function OrderStatus({ order, t }) {
  // eslint-disable-next-line react/prop-types
  const { traceId } = order;
  // eslint-disable-next-line react/prop-types
  const { status } = order;
  const [isOpen, setOpen] = React.useState(false);

  if (['both_retrieve', 'user_retrieve', 'expired'].includes(status)) {
    return status;
  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="secondary" size="small" onClick={() => setOpen(true)}>
        {t('myOrders.checkout')}
      </Button>
      {isOpen && (
        <DidAuth
          responsive
          action="pickup_swap"
          checkFn={api.get}
          onClose={() => setOpen()}
          checkTimeout={5 * 60 * 1000}
          onSuccess={() => window.location.reload()}
          extraParams={{ tid: traceId }}
          messages={{
            title: 'Checkout',
            scan: 'Scan QR code to checkout',
            confirm: 'Confirm on your ABT Wallet',
            success: 'Payment Success',
          }}
        />
      )}
    </React.Fragment>
  );
}

// eslint-disable-next-line react/prop-types
function OrderDetail({ detail, t }) {
  const [isOpen, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" size="small" onClick={() => setOpen(true)}>
        {t('myOrders.detail')}
      </Button>
      {isOpen && (
        <Dialog open onClose={onClose} maxWidth="lg">
          <DialogTitle id="alert-dialog-title">{t('myOrders.orderDetail')}</DialogTitle>
          <DialogContent>
            <CodeBlock language="json" style={{ marginBottom: 0 }}>
              {JSON.stringify(detail, null, 2)}
            </CodeBlock>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary" variant="contained">
              {t('myOrders.close')}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
}

export default function OrdersPage() {
  const state = useAsync(fetchOrders);
  const { t } = React.useContext(LocaleContext);
  if (state.loading || !state.value) {
    return (
      <Layout>
        <Main>
          <CircularProgress color="primary" size={30} />
        </Main>
      </Layout>
    );
  }

  if (state.error) {
    return (
      <Layout>
        <Main>{state.error.message}</Main>
      </Layout>
    );
  }

  const { orders, tokenInfo } = state.value;
  const filterByChain = x => tokenInfo[x.offerChainId] && tokenInfo[x.demandChainId];

  return (
    <Layout>
      <Main>
        <div className="section-top">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('myOrders.title')}
            </Typography>
          </div>
        </div>
        <TableContainer>
          <Table className="table" size="small">
            <TableHead className="table-head">
              <TableRow>
                <TableCell>{t('myOrders.id')}</TableCell>
                <TableCell>{t('myOrders.bought')}</TableCell>
                <TableCell>{t('myOrders.payment')}</TableCell>
                <TableCell>{t('myOrders.status')}</TableCell>
                <TableCell>{t('myOrders.createAt')}</TableCell>
                <TableCell>{t('myOrders.updateAt')}</TableCell>
                <TableCell>{t('myOrders.detail')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {orders
                .filter(x => filterByChain(x))
                .map(x => (
                  // eslint-disable-next-line
                  <TableRow key={x._id}>
                    <TableCell>
                      <ClickToCopy content={x.traceId}>
                        <TextCollapse maxWidth={90}>{x.traceId}</TextCollapse>
                      </ClickToCopy>
                    </TableCell>
                    <TableCell>
                      {x.offerToken > 0 &&
                        `${fromUnitToToken(x.offerToken, tokenInfo[x.offerChainId].decimal)} ${
                          tokenInfo[x.offerChainId].symbol
                        }`}
                      {x.offerAssets.map(asset => (
                        <Link
                          key={asset}
                          href={`${getChainExplorerAddress(x.offerChainHost)}/assets/${asset}`}
                          target="_blank">
                          <DidAddress copyable={false}>{asset}</DidAddress>
                        </Link>
                      ))}
                    </TableCell>
                    <TableCell>
                      {x.demandToken > 0 &&
                        `${fromUnitToToken(x.demandToken, tokenInfo[x.demandChainId].decimal)} ${
                          tokenInfo[x.demandChainId].symbol
                        }`}
                      {x.demandAssets.map(asset => (
                        <Link
                          key={asset}
                          href={`${getChainExplorerAddress(x.demandChainHost)}/assets/${asset}`}
                          target="_blank">
                          <DidAddress copyable={false}>{asset}</DidAddress>
                        </Link>
                      ))}
                    </TableCell>
                    <TableCell>
                      <OrderStatus order={x} t={t} />
                    </TableCell>
                    <TableCell>{new Date(x.createdAt).toLocaleString()}</TableCell>
                    <TableCell>{new Date(x.updatedAt).toLocaleString()}</TableCell>
                    <TableCell>
                      <OrderDetail detail={x} t={t} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {orders.length === 0 && <div className="no-order">{t('myOrders.noOrder')}</div>}
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  margin: -32px auto -32px auto;
  .section-top {
    background-color: rgb(158, 57, 169);
    padding: 6vw 0;
    .title {
      color: #ffffff;
      font-weight: 500;
      font-size: 2.5707rem;
      text-align: center;
    }
  }

  .table {
    max-width: 1280px;
    margin: 20px auto;
    .table-head {
      tr {
        background: rgba(0, 0, 0, 0.1);
        height: 56px;
        th {
          text-align: center;
        }
      }
    }
    .table-body {
      tr {
        height: 50px;
        td {
          text-align: center;
        }
      }
    }
  }

  .no-order {
    width: 100%;
    text-align: center;
    margin: 20px;
    font-size: 30px;
    color: #999999;
  }

  .page-title {
    margin-bottom: 32px;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  a:hover {
    opacity: 0.7;
  }
`;
