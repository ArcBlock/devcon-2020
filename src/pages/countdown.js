/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import DidAuth from '@arcblock/did-react/lib/Auth';
import { LocaleContext } from '@arcblock/ux/lib/Locale/context';
import CircularProgress from '@material-ui/core/CircularProgress';

import Layout from '../components/wrapper';

import { SessionContext } from '../libs/session';

import api from '../libs/api';

export default function CountDownPage({ navigate }) {
  const { session } = useContext(SessionContext);
  const { t, locale } = useContext(LocaleContext);

  let day;
  if (locale === 'zh') {
    day = new Date(1592611200000) - new Date();
  } else {
    day = new Date(1592578800000) - new Date();
  }
  const dayCount = parseInt(day / 1000 / 60 / 60 / 24, 10) + 1;

  return (
    <Layout>
      <Main>
        <div className="section-top">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('countdown.title')}
            </Typography>
          </div>
        </div>
        {dayCount > 0 && session.user && (
          <div className="section">
            <div className="section-content">
              <DidAuth
                responsive
                action="get-badge"
                checkFn={api.get}
                disableClose
                checkTimeout={5 * 60 * 1000}
                onError={() => {
                  setTimeout(() => {
                    navigate(`/${locale}/mybadges`);
                  }, 2000);
                }}
                onSuccess={() => {
                  setTimeout(() => {
                    navigate(`/${locale}/mybadges`);
                  }, 2000);
                }}
                extraParams={{
                  sessionName:
                    locale === 'zh'
                      ? `ArcBlock DevCon 倒计时第 ${dayCount} 天`
                      : `ArcBlock DevCon Countdown ${dayCount} Days`,
                  userName: session.user.name,
                  sessionID: `countdown-day-${dayCount}`,
                }}
                messages={{
                  title: t('countdown.auth.title'),
                  scan: t('countdown.auth.scan'),
                  confirm: t('countdown.auth.confirm'),
                  success: t('countdown.auth.success'),
                }}
              />
            </div>
          </div>
        )}
        {dayCount <= 0 && session.user && (
          <div className="section">
            <div className="section-content section-login-tip">
              <span className="tip">{t('countdown.tipOver')}</span>
            </div>
          </div>
        )}
        {!session.user && (
          <div className="section">
            <div className="section-content section-login-tip">
              <CircularProgress color="primary" size={20} />
              <span className="tip">{t('countdown.tip')}</span>
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
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .tip {
      margin-left: 16px;
      font-size: 20px;
      color: #222222;
    }
  }
  .section-login-tip {
    margin: 40px auto;
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
