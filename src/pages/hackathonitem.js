/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@arcblock/ux/lib/Button';
import Auth from '@arcblock/did-react/lib/Auth';

import { LocaleContext } from '@arcblock/ux/lib/Locale/context';
import Layout from '../components/wrapper';
import { SessionContext } from '../libs/session';
import { getAllStreamLinks } from '../libs/schedules';
import { getHackathonItemsByLocale } from '../libs/hackathonItems';
import { parseQuery } from '../libs/utils';
import Gitter from '../components/gitter';
import './table.css';

const ENPart = ({ locale }) => (
  <table>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', flex: 1 }}>
          <strong>Project Name</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>GitHub Repo</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=arcblock-badge-analysis-en`}>
            ArcBlock Badge Analysis
          </Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/k1ic/ArcBlock-Badge-Analysis">
            https://github.com/k1ic/ArcBlock-Badge-Analysis
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=abt-dragon-en`}>ABT Dragon</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/7655361305/dragon">
            https://github.com/7655361305/dragon
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=block-contract-en`}>Block Contract</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/ArcBlock/block-contract">
            https://github.com/ArcBlock/block-contract
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=email-to-did-blocklet-en`}>
            Email to DID Blocklet
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>---</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=finger-guessing-game-blocklet-en`}>
            Finger-guessing game blocklet
          </Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/humyna/arcblock-hachaton">
            https://github.com/humyna/arcblock-hachaton
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=imnft-digital-assets-trading-en`}>
            IMNFT Digital Assets Trading
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>---</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=lucky-ticket-en`}>Lucky Ticket</Link>
        </td>
        <td style={{ textAlign: 'center' }}>---</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=nft-marketplace-en`}>NFT Marketplace</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/ArcBlock/nft-marketplace">
            https://github.com/ArcBlock/nft-marketplace
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=nft-analysis-en`}>NFT Analysis</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/NateRobinson/NFT-DashBoard">
            https://github.com/NateRobinson/NFT-DashBoard
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=snake-game-blocklet-en`}>Snake Game Blocklet</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/leermao/snake_game">
            https://github.com/leermao/snake_game
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);
const ZHPart = ({ locale }) => (
  <table>
    <thead>
      <tr>
        <th style={{ textAlign: 'center', flex: 1 }}>
          <strong>项目名称</strong>
        </th>
        <th style={{ textAlign: 'center' }}>
          <strong>GitHub 地址</strong>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=arcblock-badge-analysis-zh`}>
            ArcBlock 徽章分析
          </Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/k1ic/ArcBlock-Badge-Analysis">
            https://github.com/k1ic/ArcBlock-Badge-Analysis
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=abt-dragon-zh`}>ABT Dragon</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/7655361305/dragon">
            https://github.com/7655361305/dragon
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=block-contract-zh`}>区块合同</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/ArcBlock/block-contract">
            https://github.com/ArcBlock/block-contract
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=email-to-did-blocklet-zh`}>
            Email to DID Blocklet
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>---</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=finger-guessing-game-blocklet-zh`}>
            石头剪刀布游戏
          </Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/humyna/arcblock-hachaton">
            https://github.com/humyna/arcblock-hachaton
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=imnft-digital-assets-trading-zh`}>
            IMNFT ABT 纪念币
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>---</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=lucky-ticket-zh`}>幸运抽奖小游戏</Link>
        </td>
        <td style={{ textAlign: 'center' }}>---</td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=nft-marketplace-zh`}>NFT 市场</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/ArcBlock/nft-marketplace">
            https://github.com/ArcBlock/nft-marketplace
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=nft-analysis-zh`}>NFT 分析平台</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/NateRobinson/NFT-DashBoard">
            https://github.com/NateRobinson/NFT-DashBoard
          </a>
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center', flex: 1 }}>
          <Link to={`${locale}/hackathonitem?id=snake-game-blocklet-zh`}>贪吃蛇小游戏</Link>
        </td>
        <td style={{ textAlign: 'center', wordBreak: 'break-all' }}>
          <a target="_blank" href="https://github.com/leermao/snake_game">
            https://github.com/leermao/snake_game
          </a>
        </td>
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
    const filterResult = getHackathonItemsByLocale(locale).filter(item => item.id === query.id);
    if (filterResult.length > 0) {
      topic = filterResult[0];
      topic.status = 'starting';
    }
  }
  const { api, session } = React.useContext(SessionContext);
  const [isShowGetBadgeAuth, setShowGetBadgeAuth] = useState(false);

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
          {topic && user && (topic.status === 'starting' || topic.status === 'is-end') && (
            <div className="have-ticket-out">
              <Typography component="p" className="content-desc">
                {t('topic.moreActions')}
              </Typography>
              <div className="have-ticket">
                <Button
                  onClick={getCertificate}
                  className="get-badge-btn"
                  color="primary"
                  variant="contained">
                  {t('topic.getBadge')}
                </Button>
              </div>
            </div>
          )}
          <Typography component="p" className="content-desc">
            {t('hackathonBadge.allProjects')}
          </Typography>
          {locale === 'zh' && <ZHPart locale={locale} />}
          {locale === 'en' && <ENPart locale={locale} />}
        </Paper>
        <Gitter room="ArcBlock/community" />
        {isShowGetBadgeAuth && (
          <Auth
            locale={locale}
            responsive
            action="get-hackathon-badge"
            checkFn={api.get}
            onClose={() => setShowGetBadgeAuth(false)}
            onSuccess={() => {}}
            extraParams={{
              sessionName: topic.name,
              userName: session.user.name,
              sessionID: topic.id,
            }}
            messages={{
              title: t('hackathonBadge.auth.title'),
              scan: t('hackathonBadge.auth.scan'),
              confirm: t('hackathonBadge.auth.confirm'),
              success: t('hackathonBadge.auth.success'),
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
        width: 300px !important;
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
      justify-content: center;
      margin-top: 15px;
      @media (max-width: ${props => props.theme.breakpoints.values.md}px) {
        flex-direction: column;
        .get-badge-btn {
          width: 100%;
          margin-top: 10px;
        }
      }
      .get-badge-btn {
        color: #ffffff !important;
        background-color: #4e6af6 !important;
        padding: 6px 16px !important;
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
