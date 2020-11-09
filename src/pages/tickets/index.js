/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import useToggle from 'react-use/lib/useToggle';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Button from '@arcblock/ux/lib/Button';
import ActionButton from '@arcblock/ux/lib/ActionButton';
import Screenshot from '@arcblock/ux/lib/Screenshot';
import Auth from '@arcblock/did-react/lib/Auth';

import { LocaleContext } from '@arcblock/ux/lib/Locale/context';
import Layout from '../../components/wrapper';
import { SessionContext } from '../../libs/session';

import freeTicket from './images/free_ticket.png';
import premiumTicket from './images/premium_ticket.png';
import mobileWelcome from './images/mobile_welcome.jpg';
import walletSetupEn from './images/on-boarding_process_en.jpg';
import walletSetupZh from './images/on-boarding_process_zh.png';
import scanEN from './images/scan_en.jpg';
import scanZH from './images/scan_zh.jpg';

const TicketsPagePlaceHolder = () => {
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
const TicketsPageRelease = () => {
  const { api, session } = React.useContext(SessionContext);
  const { t, locale } = React.useContext(LocaleContext);
  // const [loading, setLoading] = useState(false);
  const [isShowBuyFreeTicket, setShowBuyFreeTicket] = useToggle(false);
  const [isShowBuyProTicket, setShowBuyProTicket] = useToggle(false);
  // const [isDisableTheFreeButton, setDisableTheFreeButton] = useState(false);
  // const [dynamicParams, setDynamicParams] = useState({});

  // const createSwapOrder = async () => {
  //   const res = await api.post('/api/did/swap', {});
  //   return { tid: res.data.traceId };
  // };

  // const doStart = async () => {
  //   try {
  //     setLoading(true);
  //     const params = await createSwapOrder();
  //     setDynamicParams(params);
  //     setLoading(false);
  //     // eslint-disable-next-line no-empty
  //   } catch (err) {}
  //   setShowBuyProTicket();
  // };

  const buyFreeTicketSuccess = () => {
    // setDisableTheFreeButton(true);
  };
  const buyProTicketSuccess = () => {};
  // const doGetFreeTicket = () => {
  //   if (!session.user) {
  //     session.login(setShowBuyFreeTicket);
  //     return;
  //   }
  //   setShowBuyFreeTicket();
  // };
  // const doBuyProTicket = async () => {
  //   if (!session.user) {
  //     session.login(doStart);
  //     return;
  //   }
  //   await doStart();
  // };

  const androidDownloadLink =
    locale === 'zh'
      ? 'http://releases.arcblockio.cn/arcwallet_android/latest/abtwallet.apk'
      : 'https://play.google.com/store/apps/details?id=com.arcblock.wallet.app.product';

  return (
    <Layout>
      <Main>
        <div className="section-top">
          <div className="section-content">
            <Typography component="h3" className="title">
              {t('tickets.title')}
            </Typography>
          </div>
        </div>
        <div className="section-ticket-intro">
          <div className="section-content">
            <Grid container>
              <Grid item xs={12} md={6} className="ticket-desc">
                <img className="ticket-appearance" src={premiumTicket} alt="premium_ticket" />
                <div className="ticket-content ticket-content-border">
                  <Typography component="p" className="price-title">
                    {t('tickets.premiumTicketName')}
                  </Typography>
                  <ul>
                    <li>{t('tickets.rules.premium.one')}</li>
                    <li>{t('tickets.rules.premium.two')}</li>
                    <li>{t('tickets.rules.premium.three')}</li>
                    <li>{t('tickets.rules.premium.four')}</li>
                    <li>{t('tickets.rules.premium.five')}</li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="ticket-desc">
                <img className="ticket-appearance" src={freeTicket} alt="premium_ticket" />
                <div className="ticket-content ticket-content-border">
                  <Typography component="p" className="price-title">
                    {t('tickets.freeTicketName')}
                  </Typography>
                  <ul>
                    <li>{t('tickets.rules.free.one')}</li>
                    <li>{t('tickets.rules.free.two')}</li>
                    <li style={{ visibility: 'hidden' }}>3</li>
                    <li style={{ visibility: 'hidden' }}>4</li>
                    <li style={{ visibility: 'hidden' }}>5</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
            <Typography component="p" className="ticket-intro-desc">
              {t('tickets.desc')}
            </Typography>
          </div>
        </div>
        <div className="section-get-wallet">
          <div className="section-content">
            <Grid container>
              <Grid item xs={12} md={6} className="left-desc">
                <Typography component="p" className="title">
                  {t('tickets.getWallet.title')}
                </Typography>
                <Typography component="p" className="desc">
                  {t('tickets.getWallet.descPartOne')}{' '}
                  <a href="https://abtwallet.io/" target="_blank">
                    {t('tickets.getWallet.wallet')}
                  </a>{' '}
                  {t('tickets.getWallet.descPartTwo')}
                </Typography>
                <div className="btns">
                  <ActionButton href="https://itunes.apple.com/app/id1460083542" target="_blank">
                    <i className="fab fa-apple" />
                    {t('tickets.getWallet.downloadIOS')}
                  </ActionButton>
                  <ActionButton
                    className="android-download"
                    href={androidDownloadLink}
                    target="_blank">
                    <i className="fab fa-google-play" />
                    {t('tickets.getWallet.downloadAndroid')}
                  </ActionButton>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="right-desc">
                <Screenshot type="iphone-x">
                  <img src={mobileWelcome} alt="IPhone X" />
                </Screenshot>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="section-set-up">
          <div className="section-content">
            <Typography component="p" className="title">
              {t('tickets.setupWallet.title')}
            </Typography>
            <Typography component="p" className="desc">
              {t('tickets.setupWallet.desc')}
            </Typography>
            <img
              className="wallet-setup-pic"
              src={locale === 'zh' ? walletSetupZh : walletSetupEn}
              alt="wallet setup"
            />
          </div>
        </div>
        <div className="section-set-up">
          <div className="section-content">
            <Typography component="p" className="title">
              {t('tickets.prepare.title')}
            </Typography>
            <Typography component="p" className="desc">
              {t('tickets.prepare.descPartOne')}{' '}
              <a href="https://abtwallet.io/" target="_blank">
                {t('tickets.prepare.wallet')}
              </a>{' '}
              {t('tickets.prepare.descPartTwo')}
            </Typography>
            <Button className="go-token-swap-btn" color="primary" variant="contained" size="large">
              <Link
                href={
                  locale === 'zh' ? 'https://swap.arcblockio.cn/' : 'https://swap.abtnetwork.io/'
                }
                target="_blank">
                {t('tickets.prepare.btn')}
              </Link>
            </Button>
          </div>
        </div>
        <div className="section-buy-tickets">
          <div className="section-content">
            <Grid container>
              <Grid item xs={12} md={6} className="left-desc">
                <Typography component="p" className="title">
                  {t('tickets.buyTicket.title')}
                </Typography>
                <Typography component="p" className="desc">
                  {t('tickets.buyTicket.descPartOne')}{' '}
                  <strong>{t('tickets.buyTicket.descPartTwo')}</strong>
                </Typography>
                <div className="btns">
                  {session.user && (
                    <Button
                      className="my-tickets-btn"
                      color="primary"
                      variant="contained"
                      size="large">
                      <Link href={`/${locale}/mytickets`}>{t('tickets.buyTicket.myTickets')}</Link>
                    </Button>
                  )}
                  {session.user && (
                    <Button
                      className="my-tickets-btn"
                      color="primary"
                      variant="contained"
                      size="large">
                      <Link href={`/${locale}/orders`}>{t('tickets.buyTicket.myOrders')}</Link>
                    </Button>
                  )}
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="right-desc">
                <Screenshot type="iphone-x">
                  <img src={locale === 'zh' ? scanZH : scanEN} alt="scan qr code" />
                </Screenshot>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="section-share-tickets">
          <div className="section-content" />
        </div>
        {isShowBuyFreeTicket && (
          <Auth
            locale={locale}
            responsive
            action="buy-free-ticket"
            checkFn={api.get}
            onClose={() => setShowBuyFreeTicket()}
            onSuccess={buyFreeTicketSuccess}
            messages={{
              title: t('tickets.freeAuth.title'),
              scan: t('tickets.freeAuth.scan'),
              confirm: t('tickets.freeAuth.confirm'),
              success: t('tickets.freeAuth.success'),
            }}
          />
        )}
        {isShowBuyProTicket && (
          <Auth
            locale={locale}
            responsive
            action="buy-pro-ticket"
            checkFn={api.get}
            onClose={() => setShowBuyProTicket()}
            onSuccess={buyProTicketSuccess}
            extraParams={
              {
                // ...dynamicParams,
              }
            }
            messages={{
              title: t('tickets.proAuth.title'),
              scan: t('tickets.proAuth.scan'),
              confirm: t('tickets.proAuth.confirm'),
              success: t('tickets.proAuth.success'),
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
    return <TicketsPageRelease />;
  }
  return <TicketsPagePlaceHolder />;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  margin-bottom: -32px;
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
    .ticket-intro-desc {
      margin-top: 40px;
      color: #404040;
      font-size: 1.5rem;
      text-align: center;
    }
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      .ticket-intro-desc {
        font-size: 1.1rem;
      }
    }
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
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      padding: 8vw 4vw;
      .title {
        font-size: 1.4996rem !important;
      }
    }
  }
  .section-buy-ticket {
    background-color: #fbfbfb;
    text-align: center;
    padding: 6vw 0;
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
      font-size: 1.1667rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      padding: 8vw 4vw;
      .title {
        font-size: 1.4996rem !important;
      }
      .desc {
        font-size: 1rem !important;
      }
    }
  }
  .section-ticket-intro {
    padding: 6vw 0;
    background-color: #ffffff;
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
      .ticket-appearance {
        width: 70%;
        height: auto;
      }
      .ticket-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        .price-title {
          font-size: 2rem;
          font-weight: 500;
        }
        ul {
          font-size: 1rem;
          margin-bottom: 10px;
          li {
            margin: 10px 0;
          }
        }
      }
      .ticket-content-border {
        width: 70%;
        border: 1px solid #4e6af6;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 20px;
      }
    }
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      padding: 8vw 4vw;
      text-align: center;
      .ticket-desc {
        align-items: center;
        .ticket-appearance {
          width: 100%;
          height: auto;
        }
        .ticket-content {
          .price-title {
            font-size: 1.3rem;
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
  .section-get-wallet {
    padding: 6vw 0;
    background-color: #fbfbfb;
    .left-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      .title {
        margin-bottom: 32px;
        color: #222222;
        font-weight: 500;
        margin-top: 0;
        font-size: 2.5707rem;
      }
      .desc {
        margin-top: 0;
        color: #404040;
        margin-bottom: 40px;
        font-size: 1.1667rem;
      }
      .btns {
        display: flex;
        flex-direction: row;
        .action-button {
          i {
            margin-right: 16px;
          }
        }
        .android-download {
          margin-left: 16px;
          i {
            margin-right: 16px;
          }
        }
      }
    }
    .right-desc {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      text-align: left;
    }
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      padding: 8vw 4vw;
      text-align: center;
      .left-desc {
        align-items: center;
        text-align: center;
        .btns {
          flex-direction: column;
          align-items: center;
          .action-button {
            width: 100%;
          }
          .android-download {
            margin-left: 0;
            margin-bottom: 20px;
          }
        }
      }
      .right-desc {
        padding: 20px;
        .ticket-desc {
          text-align: center;
          margin-bottom: 32px;
          color: #666666;
          font-size: 0.5rem;
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
  .section-set-up {
    background-color: #ffffff;
    text-align: center;
    padding: 6vw 0;
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
      font-size: 1.1667rem;
    }
    .wallet-setup-pic {
      width: 100%;
      height: 100%;
    }
    .go-token-swap-btn {
      padding: 0;
      a {
        padding: 6px 16px;
        color: #ffffff;
        text-decoration: none;
      }
    }
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      padding: 8vw 4vw;
      text-align: center;
      .title {
        font-size: 1.4996rem !important;
      }
      .desc {
        font-size: 1rem !important;
      }
    }
  }
  .section-buy-tickets {
    padding: 6vw 0;
    background-color: #fbfbfb;
    .left-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      .title {
        margin-bottom: 32px;
        color: #222222;
        font-weight: 500;
        margin-top: 0;
        font-size: 2.5707rem;
      }
      .desc {
        margin-top: 0;
        color: #404040;
        margin-bottom: 40px;
        font-size: 1.1667rem;
      }
      .btns {
        display: flex;
        flex-direction: row;
        .buy-free-btn {
          margin-left: 16px;
        }
        .my-tickets-btn {
          margin-right: 16px;
          padding: 0;
          a {
            padding: 6px 16px;
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
    .right-desc {
      padding: 40px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      text-align: left;
    }
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      padding: 8vw 4vw;
      text-align: center;
      .left-desc {
        text-align: center;
        .btns {
          flex-direction: column;
          align-items: center;
          .buy-premium-btn {
            width: 100%;
          }
          .buy-free-btn {
            width: 100%;
            margin-top: 10px;
            margin-left: 0px;
          }
          .my-tickets-btn {
            width: 100%;
            margin-top: 10px;
            margin-right: 0px;
          }
        }
      }
      .right-desc {
        padding: 20px;
      }
      .title {
        font-size: 1.4996rem !important;
      }
      .desc {
        font-size: 1rem !important;
      }
    }
  }
  .section-share-tickets {
    display: none;
  }
`;
