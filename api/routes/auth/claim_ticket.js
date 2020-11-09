/* eslint-disable max-len */
/* eslint-disable no-console */
const ForgeSDK = require('@arcblock/forge-sdk');
const { toTypeInfo } = require('@arcblock/did');

const { VerificationToken, User } = require('../../models');
const { ensureProTicket } = require('./buyProTicket');
const env = require('../../libs/env');
const { wallet } = require('../../libs/auth');

const messages = {
  signToken: {
    en: 'Sign the token to claim your premium ticket',
    zh: '签名下面的随机串来领取你的贵宾票',
  },
  tokenInvalid: {
    en: 'Invalid claim token',
    zh: '领取令牌不正确',
  },
  signatureInvalid: {
    en: 'Token signature invalid',
    zh: '签名不正确',
  },
  tokenUnverified: {
    en: 'Token not verified',
    zh: '领取令牌未验证',
  },
  tokenClaimed: {
    en: 'Token already claimed',
    zh: '领取令牌已使用',
  },
  claimFailed: {
    en: 'Ticket claim failed',
    zh: '赠票领取失败',
  },
  emailInvalid: {
    en: 'Login email and ticker receiver email not match',
    zh: '当前登录用户的邮箱与受赠邮箱不匹配',
  },
};

module.exports = {
  action: 'claim_ticket',
  claims: {
    signature: async ({ userDid, extraParams: { locale, ct } }) => {
      const user = await User.findOne({ did: userDid });
      const item = await VerificationToken.findOne({ token: ct });
      console.log('item', { token: ct, item });
      if (!item) {
        throw new Error(messages.tokenInvalid[locale]);
      }
      if (!item.verified) {
        throw new Error(messages.tokenUnverified[locale]);
      }
      if (item.tokenClaimed) {
        throw new Error(messages.tokenClaimed[locale]);
      }
      if (user.email !== item.email) {
        // throw new Error(messages.emailInvalid[locale]);
        console.log('user mail not match');
      }

      return {
        type: 'mime:text/plain',
        data: ct,
        description: messages.signToken[locale],
      };
    },
  },

  // eslint-disable-next-line object-curly-newline
  onAuth: async ({ claims, userDid, userPk, extraParams: { locale, ct } }) => {
    const user = await User.findOne({ did: userDid });
    const item = await VerificationToken.findOne({ token: ct });
    if (!item) {
      throw new Error(messages.tokenInvalid[locale]);
    }
    if (!item.verified) {
      throw new Error(messages.tokenUnverified[locale]);
    }
    if (item.tokenClaimed) {
      throw new Error(messages.tokenClaimed[locale]);
    }
    if (user.email !== item.email) {
      // throw new Error(messages.emailInvalid[locale]);
      console.log('user email mismatch');
    }

    try {
      const claim = claims.find(x => x.type === 'signature');
      const type = toTypeInfo(userDid);
      const claimer = ForgeSDK.Wallet.fromPublicKey(userPk, type);

      if (claimer.verify(claim.origin, claim.sig, claim.method !== 'none') === false) {
        throw new Error(messages.signatureInvalid[locale]);
      }

      const asset = await ensureProTicket({ locale, userDid, userPk });
      const hash = await ForgeSDK.transfer(
        {
          to: userDid,
          assets: [asset.address],
          wallet,
        },
        { conn: env.chainId }
      );

      item.claimed = true;
      await item.save();
      console.error('ticket.claim.success', { asset, hash, userDid });

      return { hash };
    } catch (err) {
      console.error('ticket.claim.error', err);
      throw new Error(messages.claimFailed[locale]);
    }
  },
};
