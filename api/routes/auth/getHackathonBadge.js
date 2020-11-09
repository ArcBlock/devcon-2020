/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const { toTypeInfo } = require('@arcblock/did');
const ForgeSDK = require('@arcblock/forge-sdk');
const { ensureAsset, getAssetsByTargetType } = require('../../libs/util');
const { wallet, localFactory: assetFactory } = require('../../libs/auth');
const { BadgeRecord } = require('../../models');

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
  userName,
  sessionID,
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
      userName,
      sessionID,
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
  name: {
    en: 'DevCon2020 Hackathon Badge',
    zh: 'DevCon2020 黑客松',
  },
  description: {
    en: 'Sign this text to get DevCon2020 Hackathon Badge',
    zh: '签名该文本，你将获得 ArcBlok DevCon2020 黑客松徽章',
  },
  errorTxt: {
    en: 'Get Badge failed:',
    zh: '领取徽章失败：',
  },
  location: {
    en: 'Online',
    zh: '线上',
  },
  badgeDesc: {
    en: 'ArcBlock DevCon2020 Hackathon Badge',
    zh: 'ArcBlock DevCon2020 黑客松徽章',
  },
  alreadyGotError: {
    en: 'You already got this badge.',
    zh: '已经领取过此徽章，请勿重复领取！',
  },
};

module.exports = {
  action: 'get-hackathon-badge',
  claims: {
    signature: async ({
      userPk,
      userDid,
      extraParams: { locale = 'en', sessionName, sessionID },
    }) => {
      const badgeType = `DevCon2020HackathonBadge-normal-${sessionID}`;

      // check mongodb
      const exist = await BadgeRecord.findOne({
        did: userDid,
        badgeType,
      });

      if (exist) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      // TODO: need do page load
      const { assets: userAssets } = await ForgeSDK.listAssets({
        ownerAddress: userDid,
        paging: { size: 100 },
      });

      const gotBadges = getAssetsByTargetType(userAssets, userDid, badgeType);

      if (gotBadges.length > 0) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      try {
        const [assets] = await getAssets({
          type: 'badge',
          vcType: badgeType,
          userPk,
          userDid,
          name: sessionName,
          desc: `${i18Content.badgeDesc[locale]}:${sessionName}`,
          start: '2020-06-19T00:00:00.000Z',
          end: '2222-06-19T23:59:59.000Z',
          loc: i18Content.location[locale],
          sessionID,
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
  onAuth: async ({ claims, userDid, userPk, extraParams: { locale = 'en', sessionID } }) => {
    try {
      const badgeType = `DevCon2020HackathonBadge-normal-${sessionID}`;
      // check mongodb, double check
      const exist = await BadgeRecord.findOne({
        did: userDid,
        badgeType,
      });

      if (exist) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      const claim = claims.find(x => x.type === 'signature');
      const tx = await transferAsset({ claim, userDid, userPk });

      // insert a record to badge record
      const badgeRecord = new BadgeRecord({
        did: userDid,
        badgeType,
      });
      await badgeRecord.save();

      return tx;
    } catch (err) {
      throw new Error(`${i18Content.errorTxt[locale]} ${err.message}`);
    }
  },
};
