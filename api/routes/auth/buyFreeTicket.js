/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const { toTypeInfo } = require('@arcblock/did');
const ForgeSDK = require('@arcblock/forge-sdk');
const { ensureAsset } = require('../../libs/util');
const { wallet, localFactory: assetFactory } = require('../../libs/auth');

const getAssets = async ({
  type,
  vcType,
  userPk,
  userDid,
  name,
  desc,
  start,
  end,
  bg,
  logo,
  loc,
}) => {
  const tasks = [];
  tasks.push(
    ensureAsset(assetFactory, {
      userPk,
      userDid,
      type,
      vcType,
      name,
      description: desc,
      location: loc || 'Online',
      backgroundUrl: bg || '',
      logoUrl: logo || 'https://releases.arcblockio.cn/arcblock-logo.png',
      startTime: start,
      endTime: end,
    })
  );
  const assets = await Promise.all(tasks);
  return assets;
};

const transferAsset = async ({ claim, userDid, userPk }) => {
  try {
    const type = toTypeInfo(userDid);
    const user = ForgeSDK.Wallet.fromPublicKey(userPk, type);
    if (user.verify(claim.origin, claim.sig) === false) {
      throw new Error('签名错误');
    }
    const appWallet = wallet;
    const asset = JSON.parse(ForgeSDK.Util.fromBase58(claim.origin));
    const hash = await ForgeSDK.sendTransferTx({
      tx: {
        itx: {
          to: userDid,
          assets: [asset],
        },
      },
      wallet: appWallet,
    });
    return { hash, tx: claim.origin };
  } catch (err) {
    throw new Error('购票失败', err.message);
  }
};

const i18Content = {
  description: {
    en: 'Sign this text to get DevCon2020 Free Ticket',
    zh: '签名该文本，你将获得 ArcBlok DevCon2020 免费票',
  },
  errorTxt: {
    en: 'Buy Ticket failed:',
    zh: '购票失败：',
  },
  ticketName: {
    en: 'FREE TICKET',
    zh: '免 费 票',
  },
  ticketDesc: {
    en: 'Free ticket to ArcBlock DevCon2020 online sessions',
    zh: 'ArcBlock DevCon2020 在线会议入场免费票',
  },
  location: {
    en: 'Online',
    zh: '线上',
  },
};

module.exports = {
  action: 'buy-free-ticket',
  claims: {
    signature: async ({ userPk, userDid, extraParams: { locale = 'en' } }) => {
      try {
        const [assets] = await getAssets({
          type: 'ticket',
          vcType: 'DevCon2020FreeTicket',
          userPk,
          userDid,
          name: i18Content.ticketName[locale],
          desc: i18Content.ticketDesc[locale],
          start: '2020-06-19T00:00:00.000Z',
          end: '2020-06-29T23:59:59.000Z',
          loc: i18Content.location[locale],
        });
        return {
          description: i18Content.description[locale],
          data: JSON.stringify(assets.address),
          type: 'mime:text/plain',
          display: JSON.stringify(assets.data.value.credentialSubject.display),
        };
      } catch (error) {
        throw new Error(`${i18Content.errorTxt[locale]} ${error.message}`);
      }
    },
  },
  onAuth: async ({ claims, userDid, userPk, extraParams: { locale = 'en' } }) => {
    try {
      const claim = claims.find(x => x.type === 'signature');
      const tx = await transferAsset({ claim, userDid, userPk });
      return tx;
    } catch (err) {
      throw new Error(`${i18Content.errorTxt[locale]} ${err.message}`);
    }
  },
};
