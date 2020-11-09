/* eslint-disable indent */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import useAsync from 'react-use/lib/useAsync';
import { Link } from 'gatsby';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@arcblock/ux/lib/Button';
import Auth from '@arcblock/did-react/lib/Auth';

import { LocaleContext } from '@arcblock/ux/lib/Locale/context';
import forge from '../libs/sdk';
import Layout from '../components/wrapper';
import { SessionContext } from '../libs/session';
import { getSchedulesByLocale, checkIsGetBadgePassed, getAllStreamLinks } from '../libs/schedules';
import { parseQuery } from '../libs/utils';
import Gitter from '../components/gitter';
import './table.css';

const ENDayOne = ({ locale }) => (
  <table>
    <thead>
      <tr>
        <th style={{ textAlign: 'center' }}>
          <strong>Time</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>Topic</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>Speaker</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center' }}>9:00 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=where-we-are-today-en`}>ArcBlock: where we are today</Link>
        </td>
        <td style={{ textAlign: 'center' }}>Robert Mao</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>9:30 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=the-feature-of-arcblock-abt-node-en`}>
            The Next DApp Platform: ABT Node
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Robert Mao</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>10:30 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=abt-node-and-the-cloud-en`}>
            PANEL: ABT Node and the Power of Cloud Computing
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Matt McKinney, Tyler Boscolo, Samir Saluja</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>11:15 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=blocklets-en`}>
            Blocklets: Building Blocks for Modern Blockchain Software{' '}
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Shijun Wang</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>12:15 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=abt-wallet-en`}>
            ABT Wallet: Keys to the Decentralized Web
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Nate Robinson</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>13:15 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=decentralize-identity-en`}>Decentralized Identity</Link>
        </td>
        <td style={{ textAlign: 'center' }}>Kaliya Young</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>14:15 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=did-connect-en`}>DID:CONNECT</Link>
        </td>
        <td style={{ textAlign: 'center' }}>Matt McKinney</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>15:15 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=developer-ecosystem-for-dapps-en`}>
            Developer Ecosystem for DApps
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Kyle Ellicott</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>16:15 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=government-and-blockchain-en`}>
            PANEL: Government and Blockchain
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>
          Arry Yu, Charles Chen, Ian Griswold, Steve Albinoco, Robert Mao
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>17:00 PST</td>
        <td style={{ textAlign: 'center' }}>End of Day</td>
        <td style={{ textAlign: 'center' }} />
      </tr>
    </tbody>
  </table>
);

const ENDayTwo = ({ locale }) => (
  <table>
    <thead>
      <tr>
        <th style={{ textAlign: 'center' }}>
          <strong>Time</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>Topic</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>Speaker</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center' }}>10:00 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=workshop-abt-node-en`}>
            WORKSHOP: Hands on ABT Node and Blocklets
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Shijun Wang, Zhenqiang Zhang</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>12:00 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=running-aws-qldb-with-abt-node-en`}>
            WORKSHOP: Using Amazon QLDB verifiable ledger in ArcBlock ABT Node
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Lana Kalashnyk, Matt McKinney</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>13:00 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=deploy-abt-node-on-open-stack-en`}>
            WORKSHOP: Deploy ABT Node on OpenStack
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Matthew Czajka</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>14:00 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=workshop-decentralized-identity-en`}>
            WORKSHOP: Decentralized Identity
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Jonathan Lu</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>16:00 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=workshop-blockchain-en`}>
            WORKSHOP: Building Blockchain Game with Forge SDK on ABT Node
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>Shijun Wang, Nate Robinson</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>18:00 PST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=hackathon-kick-off-en`}>Hackathon Kick-off</Link>
        </td>
        <td style={{ textAlign: 'center' }}>Robert Mao</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>18:20 PST</td>
        <td style={{ textAlign: 'center' }}>End of Day</td>
        <td style={{ textAlign: 'center' }} />
      </tr>
    </tbody>
  </table>
);

const ZHDayOne = ({ locale }) => (
  <table>
    <thead>
      <tr>
        <th style={{ textAlign: 'center' }}>
          <strong>时间</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>主题</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>演讲者</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center' }}>9:00 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=where-we-are-today-zh`}>ArcBlock 平台打造记</Link>
        </td>
        <td style={{ textAlign: 'center' }}>冒志鸿</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>9:30 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=the-feature-of-arcblock-abt-node-zh`}>
            DApps 开发新范式：ABT 节点
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>冒志鸿</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>10:30 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=abt-node-deployment-zh`}>ABT 节点部署</Link>
        </td>
        <td style={{ textAlign: 'center' }}>张镇强</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>11:30 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=abt-node-and-cloud-computing-zh`}>
            圆桌：ABT 节点与云计算
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>冒志鸿，刘亮为，康馨月</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>12:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=blocklets-zh`}>Blocklet：构建去中心化应用的基石</Link>
        </td>
        <td style={{ textAlign: 'center' }}>王仕军</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>13:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=abt-wallet-zh`}>ABT 钱包：通往去中心化世界的钥匙</Link>
        </td>
        <td style={{ textAlign: 'center' }}>顾学武</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>14:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=decentralize-identity-zh`}>去中心化身份</Link>
        </td>
        <td style={{ textAlign: 'center' }}>陈俊</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>15:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=arcBlock-universal-browser-zh`}>ArcBlock 通用浏览器</Link>
        </td>
        <td style={{ textAlign: 'center' }}>卢佳孟</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>16:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=how-does-blockchain-work-zh`}>圆桌：区块链如何实战</Link>
        </td>
        <td style={{ textAlign: 'center' }}>冒志鸿，方军，陈俊</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>17:00 CST</td>
        <td style={{ textAlign: 'center' }}>结束</td>
        <td style={{ textAlign: 'center' }} />
      </tr>
    </tbody>
  </table>
);

const ZHDayTwo = ({ locale }) => (
  <table>
    <thead>
      <tr>
        <th style={{ textAlign: 'center' }}>
          <strong>时间</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>主题</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>演讲者</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center' }}>10:00 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=blockchain-game-infinite-gravity-zh`}>
            区块链游戏：无限引力
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>荆陶</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>10:45 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=blockchain-info-platform-mengyang-express-zh`}>
            去中心化资讯平台：梦阳快讯
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>陈凯</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>11:30 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=blockchain-food-source-tea-chain-zh`}>
            区块链食品溯源：茶链
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>徐咏忻</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>12:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=teach-class-abt-node-zh`}>教学课堂：ABT 节点</Link>
        </td>
        <td style={{ textAlign: 'center' }}>王仕军，张镇强</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>14:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=teach-class-decentralized-identity-zh`}>
            教学课堂：去中心化身份
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>卢佳孟</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>16:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=teach-class-blockchain-zh`}>
            教学课堂：用 Forge SDK 构建能够运行在 ABT Node 里的区块链游戏
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>王仕军，顾学武</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>18:15 CST</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={`${locale}/topic?id=hackathon-start-zh`}>黑客马拉松启动</Link>
        </td>
        <td style={{ textAlign: 'center' }}>冒志鸿</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>18:35 CST</td>
        <td style={{ textAlign: 'center' }}>结束</td>
        <td style={{ textAlign: 'center' }} />
      </tr>
    </tbody>
  </table>
);

export default function TopicPage(props) {
  const { t, locale } = React.useContext(LocaleContext);
  const allStreamLinks = getAllStreamLinks().filter(item => item.link);
  const query = parseQuery(props.location.search);
  let topic;
  if (query.id) {
    const filterResult = getSchedulesByLocale(locale).filter(item => item.id === query.id);
    if (filterResult.length > 0) {
      topic = filterResult[0];
      const isStarted = new Date().getTime() >= new Date(topic.startTime).getTime();
      const isEnded = new Date().getTime() > new Date(topic.endTime).getTime();
      if (!isStarted) {
        topic.status = 'no-start';
      } else if (isEnded) {
        topic.status = 'is-end';
      } else {
        topic.status = 'starting';
      }
    }
  }
  // check if can get badge button show
  const isGetTimePassed = checkIsGetBadgePassed(query.id);

  const { api, session } = React.useContext(SessionContext);
  const [isShowGetBadgeAuth, setShowGetBadgeAuth] = useState(false);
  const [isGetBadge, setGetBadge] = useState(false);
  const ticketStatus = useAsync(async () => {
    const { assets } = await forge.listAssets({
      ownerAddress: session.user.did,
      paging: { size: 400 },
    });
    const freeTickets = assets.filter(item => {
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
      if (types.indexOf('DevCon2020FreeTicket') === -1) {
        return false;
      }
      return true;
    });
    const proTickets = assets.filter(item => {
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
      if (types.indexOf('DevCon2020PaidTicket') === -1) {
        return false;
      }
      return true;
    });
    const badges = assets.filter(item => {
      if (item.owner !== session.user.did || !query.id) {
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
      if (types.indexOf(`DevCon2020SessionBadge-${query.id}`) === -1) {
        return false;
      }
      return true;
    });
    return {
      canWatch: freeTickets.length > 0 || proTickets.length > 0,
      isPro: proTickets.length > 0,
      badges,
    };
  }, [session.user, query.id]);

  const { user } = session;

  const getCertificate = () => {
    setShowGetBadgeAuth(true);
  };

  return (
    <Layout>
      <Main>
        <Paper key={Date.now()} className="content">
          <Typography component="p" className="content-title">
            {topic ? `${t('topic.title')} "${topic.name}"` : t('topic.title')}
          </Typography>
          {locale === 'en' && (
            <iframe
              className="fa-youtube"
              src="https://embed.restream.io/player/index.html?token=183786c7dcfde7cdd7733054da408f7c"
              width="100%"
              height="800"
              frameBorder="0"
              allowFullScreen
            />
          )}
          <Typography component="p" className="content-desc">
            {t('topic.watchLinks')}
          </Typography>
          <div className="all-streams">
            {allStreamLinks.map(item => (
              <div className="stream-item">
                <span className="title">{item.platform}:</span>
                <a className="link" target="_blank" href={item.link}>
                  {item.link}
                </a>
              </div>
            ))}
          </div>
          {topic &&
            user &&
            !ticketStatus.loading &&
            (topic.status === 'starting' || topic.status === 'is-end') && (
              <div className="have-ticket-out">
                <Typography component="p" className="content-desc">
                  {t('topic.moreActions')}
                </Typography>
                {ticketStatus.value && ticketStatus.value.canWatch && (
                  <div className="have-ticket">
                    {!isGetTimePassed && (
                      <Button
                        disabled={ticketStatus.value.badges.length > 0 || isGetBadge}
                        onClick={getCertificate}
                        className="get-badge-btn"
                        color="primary"
                        variant="contained">
                        {ticketStatus.value.badges.length > 0 || isGetBadge
                          ? t('topic.haveGotBadge')
                          : t('topic.getBadge')}
                      </Button>
                    )}
                    <Button className="download-btn" color="primary" variant="contained">
                      <a className="download-btn-link" target="_blank" href={`/${locale}/mybadges`}>
                        {t('topic.goToGetCert')}
                      </a>
                    </Button>
                    {ticketStatus.value && ticketStatus.value.isPro && (
                      <Button className="download-btn" color="primary" variant="contained">
                        <a
                          className="download-btn-link"
                          target="_blank"
                          href="https://devcon2020-videos.s3-us-west-2.amazonaws.com/guide_to_blockchain.pdf">
                          {t('topic.downloadBook')}
                        </a>
                      </Button>
                    )}
                  </div>
                )}
                {ticketStatus.value && !ticketStatus.value.canWatch && (
                  <div className="have-no-ticket">
                    <Typography component="p" className="desc">
                      {t('topic.noTicket.desc')}
                    </Typography>
                  </div>
                )}
              </div>
            )}
          <Typography component="p" className="content-desc">
            {t('topic.allSchedules')}
          </Typography>
          <Typography component="p" className="content-sub-title">
            - {t('topic.firstDay')} -
          </Typography>
          {locale === 'zh' && <ZHDayOne locale={locale} />}
          {locale === 'en' && <ENDayOne locale={locale} />}
          <Typography component="p" className="content-sub-title">
            - {t('topic.secondDay')} -
          </Typography>
          {locale === 'zh' && <ZHDayTwo locale={locale} />}
          {locale === 'en' && <ENDayTwo locale={locale} />}
        </Paper>
        <Gitter room="ArcBlock/community" />
        {isShowGetBadgeAuth && (
          <Auth
            locale={locale}
            responsive
            action="get-badge"
            checkFn={api.get}
            onClose={() => setShowGetBadgeAuth(false)}
            onSuccess={() => setGetBadge(true)}
            extraParams={{
              sessionName: topic.name,
              userName: session.user.name,
              sessionID: topic.id,
            }}
            messages={{
              title: t('topic.getBadgeAuth.title'),
              scan: t('topic.getBadgeAuth.scan'),
              confirm: t('topic.getBadgeAuth.confirm'),
              success: t('topic.getBadgeAuth.success'),
            }}
          />
        )}
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  .content {
    width: 100%;
    min-height: 500px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
      width: auto;
      margin: 0 20px;
      padding: 10px;
    }
    .content-title {
      font-size: 30px;
      font-weight: bold;
      color: #4e6af6;
      text-align: center;
    }
    .content-desc {
      margin-top: 40px;
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
    }
    .content-sub-title {
      margin-top: 20px;
      font-size: 1.2rem;
      font-weight: 500;
    }
    .fa-youtube {
      margin-top: 20px;
      @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
        width: 200px !important;
        height: 400px !important;
      }
    }
    .schedules {
      .schedule-item {
        @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
          font-size: 1rem;
        }
        margin: 10px 0;
        text-align: center;
        font-size: 1.2rem;
      }
    }
    .topic-loading {
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .desc {
        font-size: 20px;
        text-align: center;
      }
    }
    .have-ticket-out {
      @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
        width: 100%;
      }
    }
    .have-ticket {
      display: flex;
      align-items: center;
      margin-top: 15px;
      @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
        flex-direction: column;
        .get-badge-btn {
          width: 100%;
          margin-top: 10px;
        }
        .download-btn {
          width: 100%;
          margin-top: 10px;
          margin-left: 0px !important;
        }
      }
      .download-btn {
        padding: 0;
        margin-left: 16px;
        .download-btn-link {
          padding: 6px 16px;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
    .have-no-ticket {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      .desc {
        font-size: 1rem;
        color: #666666;
        text-align: center;
      }
      .see-others-btn {
        margin-top: 15px;
        min-width: 120px;
      }
    }
    .all-streams {
      margin: 10px auto;
      .desc {
        text-align: center;
      }
      .stream-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
          .title {
            width: 70px !important;
            font-size: 1rem !important;
          }
          .link {
            margin-left: 10px;
            font-size: 1rem !important;
          }
        }
        .title {
          width: 100px;
          font-size: 1.2rem;
          text-align: right;
        }
        .link {
          flex: 1;
          margin-left: 10px;
          font-size: 1.25rem;
          display: inline-block;
          word-break: break-all;
        }
      }
    }
  }
`;
