/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import DidAuth from '@arcblock/did-react/lib/Auth';
import { LocaleContext } from '@arcblock/ux/lib/Locale/context';

import Layout from '../../components/wrapper';

import { SessionContext } from '../../libs/session';

import api from '../../libs/api';
import { parseQuery } from '../../libs/utils';

export default function TicketClaimPage({ navigate }) {
  const { session } = useContext(SessionContext);
  const { t, locale } = useContext(LocaleContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState(null);

  useEffect(() => {
    const params = parseQuery(window.location.search);
    if (!params.token) {
      navigate(`/${locale}/tickets`);
      return;
    }

    setLoading(true);
    api.get(`/api/tickets/verify/${params.token}`).then(({ data }) => {
      setLoading(false);
      setRecord(data);
    });
  }, []);

  useEffect(() => {
    if (!loggedIn && !session.user && !session.loading) {
      setLoggedIn(true);
      session.login(() => {
        setLoggedIn(false);
      });
    }
  }, [session]);

  return (
    <Layout>
      <Main>
        <div className="section-top">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('claim.title')}
            </Typography>
          </div>
        </div>
        {(!session.user || loading) && (
          <div className="my-tickets my-tickets-progress">
            <CircularProgress color="primary" size={30} />
          </div>
        )}
        {session.user && !loading && !record && (
          <div className="section">
            <div className="section-content">
              <p>{t('claim.tokenError')}</p>
            </div>
          </div>
        )}
        {session.user && !loading && record && (
          <div className="section">
            <div className="section-content">
              <DidAuth
                responsive
                action="claim_ticket"
                checkFn={api.get}
                disableClose
                checkTimeout={5 * 60 * 1000}
                onSuccess={() => {
                  setTimeout(() => {
                    navigate(`/${locale}/mytickets`);
                  }, 2000);
                }}
                extraParams={{ ct: record.token }}
                messages={{
                  title: t('claim.claimDialog.title'),
                  scan: t('claim.claimDialog.scan'),
                  confirm: t('claim.claimDialog.confirm'),
                  success: t('claim.claimDialog.success'),
                }}
              />
            </div>
          </div>
        )}
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
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
`;
