/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
const { toTypeInfo } = require('@arcblock/did');
const ForgeSDK = require('@arcblock/forge-sdk');
const { ensureAsset, getAssetsByTargetType } = require('../../libs/util');
const { wallet, localFactory: assetFactory } = require('../../libs/auth');
const { BadgeRecord } = require('../../models');
const { checkIsGetBadgePassed } = require('../../../src/libs/schedules');

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
  description: {
    en: 'Sign this text to get DevCon2020 Badge',
    zh: '签名该文本，你将获得 ArcBlok DevCon2020 徽章',
  },
  errorTxt: {
    en: 'Get Badge failed:',
    zh: '领取徽章失败：',
  },
  location: {
    en: 'Online',
    zh: '线上',
  },
  noDevconTicket: {
    en: 'You have no DevCon2020 ticket',
    zh: '你没有 ArcBlock DevCon 2020 的门票，请先购买',
  },
  badgeDescPartOne: {
    en: 'Proof that the holder have completed the session',
    zh: '完成 ArcBlock DevCon 2020 活动',
  },
  badgeDescPartTwo: {
    en: 'of ArcBlock DevCon 2020',
    zh: '的徽章',
  },
  alreadyGotError: {
    en: 'You already got this badge.',
    zh: '已经领取过此徽章，请勿重复领取！',
  },
  eventOver: {
    en: 'Sorry, Beyond Collection Time!',
    zh: '对不起，已经超过领取时间！',
  },
  ticketNotMatch: {
    en: 'Sorry, The Ticket Not Match Your DID!',
    zh: '对不起，门票与你的 DID 不匹配！',
  },
};

module.exports = {
  action: 'get-badge',
  claims: {
    signature: async ({
      userPk,
      userDid,
      extraParams: { locale = 'en', sessionName, sessionID, userName },
    }) => {
      // check mongodb
      const exist = await BadgeRecord.findOne({
        did: userDid,
        badgeType: `DevCon2020SessionBadge-${sessionID}`,
      });

      if (exist) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      if (sessionID.indexOf('countdown-day-') === -1) {
        // count down badge do not check
        const isGetTimePassed = checkIsGetBadgePassed(sessionID);
        if (isGetTimePassed) {
          throw new Error(i18Content.eventOver[locale]);
        }
      }

      // TODO: need do page load
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

      const gotBadges = getAssetsByTargetType(
        userAssets,
        userDid,
        `DevCon2020SessionBadge-${sessionID}`
      );

      if (freeTickets.length === 0 && proTickets.length === 0) {
        throw new Error(i18Content.noDevconTicket[locale]);
      }

      if (freeTicketsWithStrict.length === 0 && proTicketsWithStrict.length === 0) {
        throw new Error(i18Content.ticketNotMatch[locale]);
      }

      if (gotBadges.length > 0) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      try {
        const [assets] = await getAssets({
          type: 'badge',
          vcType: `DevCon2020SessionBadge-${sessionID}`,
          userPk,
          userDid,
          name: sessionName,
          desc: `${i18Content.badgeDescPartOne[locale]} "${sessionName}" ${i18Content.badgeDescPartTwo[locale]}`,
          start: '2020-06-19T00:00:00.000Z',
          end: '2222-06-19T23:59:59.000Z',
          loc: i18Content.location[locale],
          isPro: proTicketsWithStrict.length > 0,
          userName,
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
      // check mongodb, double check
      const exist = await BadgeRecord.findOne({
        did: userDid,
        badgeType: `DevCon2020SessionBadge-${sessionID}`,
      });

      if (exist) {
        throw new Error(i18Content.alreadyGotError[locale]);
      }

      const claim = claims.find(x => x.type === 'signature');
      const tx = await transferAsset({ claim, userDid, userPk });

      // insert a record to badge record
      const badgeRecord = new BadgeRecord({
        did: userDid,
        badgeType: `DevCon2020SessionBadge-${sessionID}`,
      });
      await badgeRecord.save();

      return tx;
    } catch (err) {
      throw new Error(`${i18Content.errorTxt[locale]} ${err.message}`);
    }
  },
};
