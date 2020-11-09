/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import useAsync from 'react-use/lib/useAsync';
import { fromBase64 } from '@arcblock/forge-util';
import pako from 'pako';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@arcblock/ux/lib/Button';
import Auth from '@arcblock/did-react/lib/Auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import { LocaleContext } from '@arcblock/ux/lib/Locale/context';
import forge from '../../libs/sdk';
import Layout from '../../components/wrapper';
import { SessionContext } from '../../libs/session';
import { getSchedulesByLocale } from '../../libs/schedules';
import { getAssetsByTargetType } from '../../libs/utils';

const MyBadgesPagePlaceHolder = () => {
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

const MyBadgesPageRelease = () => {
  const { api, session } = React.useContext(SessionContext);
  const { t, locale } = React.useContext(LocaleContext);
  const schedules = getSchedulesByLocale(locale).filter(item => !item.isTest);
  const [isShowFirstGetCert, setShowFirstGetCert] = useState(false);
  const [isShowSecondGetCert, setShowSecondGetCert] = useState(false);
  const [isGetFirstCert, setGetFirstCert] = useState(false);
  const [isGetSecondCert, setGetSecondCert] = useState(false);

  let firstDaySchedules = schedules.filter(item => item.dayOrder === 0);
  let secondDaySchedules = schedules.filter(item => item.dayOrder === 1);

  const placeholderSchedulesOfFirst = [];
  const placeholderSchedulesOfSecond = [];

  const firstDaySchedulesLength = firstDaySchedules.length;
  const secondDaySchedulesLength = secondDaySchedules.length;

  if (firstDaySchedulesLength > secondDaySchedulesLength) {
    for (let i = 0; i < firstDaySchedulesLength - secondDaySchedulesLength; i++) {
      placeholderSchedulesOfSecond.push('.');
    }
  } else if (firstDaySchedulesLength < secondDaySchedulesLength) {
    for (let i = 0; i < secondDaySchedulesLength - firstDaySchedulesLength; i++) {
      placeholderSchedulesOfFirst.push('.');
    }
  }

  const myAssets = useAsync(async () => {
    const { assets } = await forge.listAssets({
      ownerAddress: session.user.did,
      paging: { size: 400 },
    });

    const firstDayCerts = getAssetsByTargetType(
      assets,
      session.user.did,
      'DevCon2020SessionCertificate-0'
    );
    const secondDayCerts = getAssetsByTargetType(
      assets,
      session.user.did,
      'DevCon2020SessionCertificate-1'
    );

    const badges = getAssetsByTargetType(assets, session.user.did, 'NFTBadge').map(item => {
      const value = JSON.parse(item.data.value);
      const buffer = pako.ungzip(fromBase64(value.credentialSubject.display.content), {});
      item.nftDisplay = Buffer.from(buffer).toString('utf8');
      let types = value.type;
      if (!Array.isArray(types)) {
        types = [types];
      }
      firstDaySchedules = firstDaySchedules.map(schedule => {
        if (
          types.filter(type => type.indexOf(`DevCon2020SessionBadge-${schedule.id}`) > -1).length >
          0
        ) {
          schedule.isOk = true;
        }
        return schedule;
      });
      secondDaySchedules = secondDaySchedules.map(schedule => {
        if (
          types.filter(type => type.indexOf(`DevCon2020SessionBadge-${schedule.id}`) > -1).length >
          0
        ) {
          schedule.isOk = true;
        }
        return schedule;
      });
      return item;
    });
    return {
      badges,
      isGotFirstCert: firstDayCerts.length > 0,
      isGotSecondCert: secondDayCerts.length > 0,
    };
  }, [session.user]);

  const getExplorerUrl = url => {
    if (typeof window !== 'undefined') {
      const baseLink = window.env.chainHost.replace('/api', '');
      return `${baseLink}/node/explorer${url}`;
    }
    return '/';
  };

  const firstFinishCount = firstDaySchedules.filter(item => item.isOk).length;
  const secondFinishCount = secondDaySchedules.filter(item => item.isOk).length;

  const getFirstButtonTxt = () => {
    if (isGetFirstCert || (myAssets.value && myAssets.value.isGotFirstCert)) {
      return t('myBadges.alreadyGotCert');
    }
    if (firstFinishCount !== firstDaySchedules.length) {
      return t('myBadges.getAllBadgesFirst');
    }
    return t('myBadges.getCert');
  };

  const getSecondButtonTxt = () => {
    if (isGetSecondCert || (myAssets.value && myAssets.value.isGotSecondCert)) {
      return t('myBadges.alreadyGotCert');
    }
    if (secondFinishCount !== secondDaySchedules.length) {
      return t('myBadges.getAllBadgesFirst');
    }
    return t('myBadges.getCert');
  };

  return (
    <Layout>
      <Main>
        <div className="section-top">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('myBadges.title')}
            </Typography>
          </div>
        </div>
        {!session.user && (
          <div className="my-tickets my-tickets-progress">
            <CircularProgress color="primary" size={30} />
          </div>
        )}
        <div className="section-ticket-get-cert">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('myBadges.getCerts')}
            </Typography>
            <Grid container>
              <Grid item xs={12} md={6} className="ticket-desc">
                <div className="ticket-content ticket-content-border">
                  <Typography component="p" className="price-title">
                    Talk Certificate({firstFinishCount}/{firstDaySchedules.length})
                  </Typography>
                  <ul>
                    {firstDaySchedules.map((schedule, index) => (
                      <li>
                        <Link href={`/${locale}/topic?id=${schedule.id}`}>
                          {index + 1}. {schedule.name}
                        </Link>
                        {schedule.isOk && <CheckIcon />}
                        {!schedule.isOk && <WarningOutlinedIcon className="warn" />}
                      </li>
                    ))}
                    {placeholderSchedulesOfFirst.map(placeholder => (
                      <li style={{ visibility: 'hidden' }}>{placeholder}</li>
                    ))}
                  </ul>
                  <Button
                    disabled={
                      firstFinishCount !== firstDaySchedules.length ||
                      isGetFirstCert ||
                      (myAssets.value && myAssets.value.isGotFirstCert)
                    }
                    className="buy-premium-btn"
                    color="primary"
                    size="large"
                    onClick={() => setShowFirstGetCert(true)}
                    variant="contained">
                    {getFirstButtonTxt()}
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="ticket-desc">
                <div className="ticket-content ticket-content-border">
                  <Typography component="p" className="price-title">
                    WorkShop Certificate({secondFinishCount}/{secondDaySchedules.length})
                  </Typography>
                  <ul>
                    {secondDaySchedules.map((schedule, index) => (
                      <li>
                        <Link href={`/${locale}/topic?id=${schedule.id}`}>
                          {index + 1}. {schedule.name}
                        </Link>
                        {schedule.isOk && <CheckIcon />}
                        {!schedule.isOk && <WarningOutlinedIcon className="warn" />}
                      </li>
                    ))}
                    {placeholderSchedulesOfSecond.map(placeholder => (
                      <li style={{ visibility: 'hidden' }}>{placeholder}</li>
                    ))}
                  </ul>
                  <Button
                    disabled={
                      secondFinishCount !== secondDaySchedules.length ||
                      isGetSecondCert ||
                      (myAssets.value && myAssets.value.isGotSecondCert)
                    }
                    className="buy-premium-btn"
                    color="primary"
                    size="large"
                    onClick={() => setShowSecondGetCert(true)}
                    variant="contained">
                    {getSecondButtonTxt()}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="section-badges-list">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('myBadges.badgeList')}
            </Typography>
            {session.user && myAssets.loading && (
              <div className="my-tickets">
                <Typography component="p" className="title">
                  {t('myBadges.loading')}
                </Typography>
              </div>
            )}
            {session.user && myAssets.value && myAssets.value.badges.length > 0 && (
              <div className="my-tickets">
                <Grid className="tickets-out" container spacing={6}>
                  {myAssets.value.badges.map(item => (
                    <Grid item xs={6} md={3} key={item.address}>
                      <Link target="_blank" href={getExplorerUrl(`/assets/${item.address}`)}>
                        <div
                          className="ticket-item"
                          dangerouslySetInnerHTML={{ __html: item.nftDisplay }}
                        />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </div>
            )}
            {session.user && myAssets.value && myAssets.value.badges.length === 0 && (
              <div className="my-tickets">
                <Typography component="p" className="title">
                  {t('myBadges.noBadge')}
                </Typography>
                <Button className="buy-ticket" color="primary" variant="contained" size="large">
                  <Link href={`/${locale}/#schedule`}>{t('myBadges.goToGet')}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
        {isShowFirstGetCert && (
          <Auth
            locale={locale}
            responsive
            action="get-cert"
            checkFn={api.get}
            onClose={() => setShowFirstGetCert(false)}
            onSuccess={() => setGetFirstCert(true)}
            extraParams={{
              dayOrder: 0,
            }}
            messages={{
              title: t('topic.getCertAuth.title'),
              scan: t('topic.getCertAuth.scan'),
              confirm: t('topic.getCertAuth.confirm'),
              success: t('topic.getCertAuth.success'),
            }}
          />
        )}
        {isShowSecondGetCert && (
          <Auth
            locale={locale}
            responsive
            action="get-cert"
            checkFn={api.get}
            onClose={() => setShowSecondGetCert(false)}
            onSuccess={() => setGetSecondCert(true)}
            extraParams={{
              dayOrder: 1,
            }}
            messages={{
              title: t('topic.getCertAuth.title'),
              scan: t('topic.getCertAuth.scan'),
              confirm: t('topic.getCertAuth.confirm'),
              success: t('topic.getCertAuth.success'),
            }}
          />
        )}
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
    return <MyBadgesPageRelease />;
  }
  return <MyBadgesPagePlaceHolder />;
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
  .section-ticket-get-cert {
    padding: 3vw 0;
    .title {
      color: #222222;
      font-weight: 500;
      font-size: 2.5707rem;
      text-align: center;
      margin-bottom: 32px;
    }
    .desc {
      margin-bottom: 40px;
      margin-top: 0;
      color: #404040;
      text-align: center;
      font-size: 1.1667rem;
    }
    .ticket-desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      padding: 20px;
      .ticket-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        .price-title {
          font-size: 1.6rem;
          font-weight: 500;
        }
        ul {
          width: 100%;
          padding: 0 20px;
          font-size: 1rem;
          margin-bottom: 10px;
          li {
            margin: 12px 0;
            display: flex;
            align-items: center;
            svg {
              color: green;
              margin-left: 10px;
            }
            .warn {
              color: #ffce46;
            }
          }
        }
      }
      .ticket-content-border {
        width: 80%;
        border: 1px solid #4e6af6;
        box-sizing: border-box;
        padding: 20px;
        border-radius: 20px;
      }
    }
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      padding: 8vw 4vw;
      .ticket-desc {
        align-items: center;
        .ticket-content {
          .price-title {
            font-size: 1.3rem;
          }
          ul {
            text-align: left;
            padding: 0;
            li {
              margin: 10px 0;
              svg {
                margin-left: 4px;
              }
            }
          }
        }
        .ticket-content-border {
          width: 100%;
        }
      }
      .title {
        font-size: 1.4996rem !important;
      }
      .desc {
        font-size: 1rem !important;
      }
    }
  }
  .section-badges-list {
    padding: 3vw 0;
    .title {
      color: #222222;
      font-weight: 500;
      font-size: 2.5707rem;
      text-align: center;
      margin-bottom: 32px;
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
        padding: 0;
        a {
          padding: 6px 16px;
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
  }
  .my-tickets-progress {
    padding-top: 100px;
  }
`;
