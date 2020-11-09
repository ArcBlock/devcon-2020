/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const ForgeSDK = require('@arcblock/forge-sdk');
const { ensureAsset } = require('../../libs/util');
const env = require('../../libs/env');
const { walletJSON: wallet, localFactory: assetFactory, swapStorage } = require('../../libs/auth');

const chains = {
  local: {
    host: env.chainHost,
    id: env.chainId,
  },
  foreign: {
    host: env.assetChainHost,
    id: env.assetChainId,
  },
};

const i18Content = {
  priceCheckError: {
    en: 'Cannot buy/sell foreign asset without a valid price',
    zh: '没有有效的价格，无法完成购买',
  },
  errorTxt: {
    en: 'Buy Ticket failed:',
    zh: '购票失败：',
  },
  ticketName: {
    en: 'PREMIUM TICKET',
    zh: '贵 宾 票',
  },
  ticketDesc: {
    en: 'Premium ticket to ArcBlock DevCon2020 online sessions',
    zh: 'ArcBlock DevCon2020 在线会议贵宾票',
  },
  location: {
    en: 'Online',
    zh: '线上',
  },
};

const ensureProTicket = ({ locale, userPk, userDid }) =>
  ensureAsset(assetFactory, {
    userPk,
    userDid,
    type: 'ticket',
    vcType: 'DevCon2020PaidTicket',
    name: i18Content.ticketName[locale],
    description: i18Content.ticketDesc[locale],
    location: i18Content.location[locale],
    backgroundUrl: '',
    logoUrl: 'https://releases.arcblockio.cn/arcblock-logo.png',
    startTime: '2020-06-19T00:00:00.000Z',
    endTime: '2020-06-29T23:59:59.000Z',
  });

module.exports = {
  action: 'buy-pro-ticket',
  claims: {
    swap: async ({ userDid, userPk, extraParams: { tid, locale = 'en' } }) => {
      const price = 100;
      const asset = await ensureProTicket({ locale, userPk, userDid });
      try {
        const offerChain = chains.local;
        const demandChain = chains.foreign;
        const payload = {
          offerChainId: offerChain.id,
          offerChainHost: offerChain.host,
          offerAssets: [asset.address],
          offerToken: (await ForgeSDK.fromTokenToUnit(0, { conn: offerChain.id })).toString(),
          offerUserAddress: wallet.address, // 卖家地址

          demandChainId: demandChain.id,
          demandChainHost: demandChain.host,
          demandAssets: [],
          demandToken: (await ForgeSDK.fromTokenToUnit(price, { conn: demandChain.id })).toString(),
          demandUserAddress: userDid, // 买家地址
          demandLocktime: await ForgeSDK.toLocktime(600, { conn: demandChain.id }),
        };
        await swapStorage.finalize(tid, payload);
        const swap = await swapStorage.read(tid);
        return {
          swapId: tid,
          receiver: wallet.address,
          ...swap,
        };
      } catch (err) {
        throw new Error(i18Content.errorTxt[locale]);
      }
    },
  },
  onAuth: async () => {},
};

module.exports.ensureProTicket = ensureProTicket;
