/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import useAsync from 'react-use/lib/useAsync';
import { fromBase64 } from '@arcblock/forge-util';
import pako from 'pako';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '@arcblock/ux/lib/Button';
import DidAuth from '@arcblock/did-react/lib/Auth';
import { LocaleContext } from '@arcblock/ux/lib/Locale/context';

import Layout from '../../components/wrapper';
import Confirm from '../../components/confirm';
import AlertDialog from '../../components/alert';

import { SessionContext } from '../../libs/session';

import forge from '../../libs/sdk';
import api from '../../libs/api';

const MyTicketsPagePlaceHolder = () => {
  const { t } = React.useContext(LocaleContext);
  return (
    <Layout>
      <Main>
        <Paper className="coming-soon">
          <Typography component="p" className="desc">
            {t('tickets.comingSoon.desc')}
          </Typography>
        </Paper>
      </Main>
    </Layout>
  );
};

const MyTicketsPageRelease = () => {
  const { session } = useContext(SessionContext);
  const { t } = useContext(LocaleContext);
  const [shareAddress, setShareAddress] = useState('');
  const [shareEmail, setShareEmail] = useState('');
  const [verifyLink, setVerifyLink] = useState('');

  const myTickets = useAsync(async () => {
    let { assets } = await forge.listAssets({
      ownerAddress: session.user.did,
      paging: { size: 400 },
    });
    assets = assets
      .filter(item => {
        if (item.owner !== session.user.did) {
          return false;
        }
        if (item.data.typeUrl !== 'vc') {
          return false;
        }
        const value = JSON.parse(item.data.value);
        let types = value.type;
        if (!Array.isArray(types)) {
          types = [types];
        }
        if (
          types.indexOf('DevCon2020PaidTicket') === -1 &&
          types.indexOf('DevCon2020FreeTicket') === -1
        ) {
          return false;
        }
        return true;
      })
      .map(item => {
        const value = JSON.parse(item.data.value);
        const buffer = pako.ungzip(fromBase64(value.credentialSubject.display.content), {});
        item.nftDisplay = Buffer.from(buffer).toString('utf8');
        item.isFree = (Array.isArray(value.type) ? value.type : [value.type]).includes(
          'DevCon2020FreeTicket'
        );
        return item;
      });
    return assets;
  }, [session.user]);

  const getExplorerUrl = url => {
    if (typeof window !== 'undefined') {
      const baseLink = window.env.chainHost.replace('/api', '');
      return `${baseLink}/node/explorer${url}`;
    }
    return '/';
  };

  return (
    <Layout>
      <Main>
        <div className="section-top">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('myTickets.title')}
            </Typography>
          </div>
        </div>
        {!session.user && (
          <div className="my-tickets my-tickets-progress">
            <CircularProgress color="primary" size={30} />
          </div>
        )}
        {session.user && myTickets.loading && (
          <div className="my-tickets">
            <Typography component="p" className="title">
              {t('myTickets.loading')}
            </Typography>
          </div>
        )}
        {session.user && myTickets.value && myTickets.value.length > 0 && (
          <div className="my-tickets">
            <Grid className="tickets-out" container spacing={6}>
              {myTickets.value.map(item => (
                <Grid item xs={12} md={4} key={item.address} style={{ textAlign: 'center' }}>
                  <Link target="_blank" href={getExplorerUrl(`/assets/${item.address}`)}>
                    <div
                      className="ticket-item"
                      dangerouslySetInnerHTML={{ __html: item.nftDisplay }}
                    />
                  </Link>
                  {!item.isFree && (
                    <Button
                      color="primary"
                      variant="contained"
                      className="give-button"
                      onClick={() => setShareAddress(item.address)}>
                      {t('claim.give')}
                    </Button>
                  )}
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        {session.user && myTickets.value && myTickets.value.length === 0 && (
          <div className="my-tickets">
            <Typography component="p" className="title">
              {t('myTickets.noTicket')}
            </Typography>
          </div>
        )}
        {!!shareAddress && (
          <Confirm
            title={t('claim.title')}
            description={(params, setParams) => (
              <Typography component="div">
                <Typography gutterBottom>{t('claim.emailTip')}</Typography>
                <TextField
                  fullWidth
                  error={!!params.error}
                  value={params.email}
                  onChange={e => {
                    if (e.target.value !== session.user.email) {
                      setParams({ ...params, error: '', email: e.target.value });
                    } else {
                      setParams({ ...params, error: t('claim.emailError') });
                    }
                  }}
                  variant="outlined"
                  label={t('claim.emailLabel')}
                  margin="dense"
                  helperText={params.error}
                  autoFocus
                />
              </Typography>
            )}
            cancel={t('claim.cancel')}
            confirm={t('claim.confirm')}
            params={{ email: '' }}
            onConfirm={params => setShareEmail(params.email)}
            onCancel={() => setShareAddress('')}
          />
        )}
        {!!shareEmail && (
          <DidAuth
            responsive
            action="give_ticket"
            checkFn={api.get}
            onClose={() => {
              setShareEmail('');
              setShareAddress('');
            }}
            checkTimeout={5 * 60 * 1000}
            onSuccess={result => {
              setTimeout(() => {
                setShareEmail('');
                setShareAddress('');
                if (result && result.verifyLink) {
                  setVerifyLink(result.verifyLink);
                }
              }, 2000);
            }}
            extraParams={{ email: shareEmail, ticket: shareAddress }}
            messages={{
              title: t('claim.giveDialog.title'),
              scan: t('claim.giveDialog.scan'),
              confirm: t('claim.giveDialog.confirm'),
              success: t('claim.giveDialog.success'),
            }}
          />
        )}
        {!!verifyLink && <AlertDialog url={verifyLink} />}
      </Main>
    </Layout>
  );
};

export default function TicketsPage() {
  let releaseTicket = false;
  if (typeof window !== 'undefined') {
    releaseTicket = window.env.releaseTicket || false;
  }
  if (releaseTicket) {
    return <MyTicketsPageRelease />;
  }
  return <MyTicketsPagePlaceHolder />;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  .coming-soon {
    margin: 40px 20px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .desc {
      font-size: 30px;
      font-weight: 500;
    }
  }
  .section-content {
    width: auto;
    max-width: 1280px;
    margin: 0 auto;
  }
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
  .my-tickets {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin: 60px auto 20px auto;
      font-size: 1.5rem;
    }
    .buy-ticket {
      a {
        text-decoration: none;
        color: #ffffff;
      }
    }
    .tickets-out {
      width: 100%;
      margin-top: 20px;
      @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
        .MuiGrid-item {
          padding: 0;
          box-sizing: border-box;
        }
        margin-top: 10px;
      }
      .ticket-item {
        cursor: pointer;
        @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
          margin: 20px;
        }
      }
    }
  }
  .my-tickets-progress {
    padding-top: 100px;
  }

  .give-button {
    margin-top: 16px;
  }
`;
