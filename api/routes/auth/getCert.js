/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const { toTypeInfo } = require('@arcblock/did');
const ForgeSDK = require('@arcblock/forge-sdk');
const { ensureAsset, getAssetsByTargetType } = require('../../libs/util');
const { wallet, localFactory: assetFactory } = require('../../libs/auth');
const { CertRecord } = require('../../models');

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
  isPro,
  certType,
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
      isPro,
      certType,
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
    throw new Error('领取失败', err.message);
  }
};

const i18Content = {
  description: {
    en: 'Sign this text to get DevCon2020 Certificate',
    zh: '签名该文本，你将获得 ArcBlok DevCon2020 证书',
  },
  errorTxt: {
    en: 'Get Certificate failed:',
    zh: '领取证书失败：',
  },
  location: {
    en: 'Online',
    zh: '线上',
  },
  firstDayCertName: {
    en: 'First Day Complete Certificate',
    zh: '第一天活动完成证书',
  },
  firstDayCertDesc: {
    en: 'Proof that the holder have completed the first day session of ArcBlock DevCon 2020',
    zh: '完成 ArcBlock DevCon 2020 第一天活动的证书',
  },
  secondDayCertName: {
    en: 'Second Day Complete Certificate',
    zh: '第二天活动完成证书',
  },
  secondDayCertDesc: {
    en: 'Proof that the holder have completed the second day session of ArcBlock DevCon 2020',
    zh: '完成 ArcBlock DevCon 2020 第二天活动的证书',
  },
  hackathonCertName: {
    en: 'Hackathon Complete Certificate',
    zh: '黑客松完成证书',
  },
  hackathonCertDesc: {
    en: 'Proof that the holder have completed the hackathon of ArcBlock DevCon 2020',
    zh: '完成 ArcBlock DevCon 2020 黑客马拉松的证书',
  },
  noDevconTicket: {
    en: 'You have no DevCon2020 ticket',
    zh: '你没有 ArcBlock DevCon 2020 的门票，请先购买',
  },
  alreadyGotError: {
    en: 'You already got this certificate.',
    zh: '已经领取过此证书，请勿重复领取！',
  },
  ticketNotMatch: {
    en: 'Sorry, The Ticket Not Match Your DID!',
    zh: '对不起，门票与你的 DID 不匹配！',
  },
};

module.exports = {
  action: 'get-cert',
  claims: {
    signature: async ({ userPk, userDid, extraParams: { locale = 'en', dayOrder } }) => {
      // check from mongodb
      const exist = await CertRecord.findOne({
        did: userDid,
        certType: `DevCon2020SessionCertificate-${dayOrder}`,
      });

      if (exist) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      const { assets: userAssets } = await ForgeSDK.listAssets({
        ownerAddress: userDid,
        paging: { size: 400 },
      });

      if (!userAssets || userAssets.length === 0) {
        throw new Error(i18Content.noDevconTicket[locale]);
      }

      const freeTickets = getAssetsByTargetType(userAssets, userDid, 'DevCon2020FreeTicket');
      const proTickets = getAssetsByTargetType(userAssets, userDid, 'DevCon2020PaidTicket');

      const freeTicketsWithStrict = getAssetsByTargetType(
        userAssets,
        userDid,
        'DevCon2020FreeTicket',
        true
      );
      const proTicketsWithStrict = getAssetsByTargetType(
        userAssets,
        userDid,
        'DevCon2020PaidTicket',
        true
      );

      if (freeTickets.length === 0 && proTickets.length === 0) {
        throw new Error(i18Content.noDevconTicket[locale]);
      }

      if (freeTicketsWithStrict.length === 0 && proTicketsWithStrict.length === 0) {
        throw new Error(i18Content.ticketNotMatch[locale]);
      }

      let desc;
      let name;
      if (dayOrder === '0') {
        desc = i18Content.firstDayCertDesc[locale];
        name = i18Content.firstDayCertName[locale];
      } else if (dayOrder === '1') {
        desc = i18Content.secondDayCertDesc[locale];
        name = i18Content.secondDayCertName[locale];
      } else {
        desc = i18Content.hackathonCertDesc[locale];
        name = i18Content.hackathonCertName[locale];
      }
      try {
        const [assets] = await getAssets({
          type: 'certificate',
          vcType: `DevCon2020SessionCertificate-${dayOrder}`,
          userPk,
          userDid,
          name,
          desc,
          start: '2020-06-19T00:00:00.000Z',
          end: '2222-06-19T23:59:59.000Z',
          loc: i18Content.location[locale],
          isPro: proTicketsWithStrict.length > 0,
          certType: `DevCon2020SessionCertificate-${dayOrder}`,
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
  onAuth: async ({ claims, userDid, userPk, extraParams: { locale = 'en', dayOrder } }) => {
    try {
      // check from mongodb, double check
      const exist = await CertRecord.findOne({
        did: userDid,
        certType: `DevCon2020SessionCertificate-${dayOrder}`,
      });

      if (exist) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      const claim = claims.find(x => x.type === 'signature');
      const tx = await transferAsset({ claim, userDid, userPk });
      // insert a record to certificate record
      const badgeRecord = new CertRecord({
        did: userDid,
        certType: `DevCon2020SessionCertificate-${dayOrder}`,
      });
      await badgeRecord.save();
      return tx;
    } catch (err) {
      throw new Error(`${i18Content.errorTxt[locale]} ${err.message}`);
    }
  },
};
