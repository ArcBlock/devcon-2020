/* eslint-disable max-len */
/* eslint-disable no-console */
const ForgeSDK = require('@arcblock/forge-sdk');

const { VerificationToken, User } = require('../../models');
const env = require('../../libs/env');
const mail = require('../../libs/mail');

const messages = {
  claimTicket: {
    en: 'Please claim your premium ticket of ArcBlock DevCon2020',
    zh: '您有一张 ArcBlock DevCon2020 的贵宾票待领取',
  },
  sendFailed: {
    en: 'Ticket claim email send failed',
    zh: '领票通知邮件发送失败',
  },
  hi: {
    en: 'Hi',
    zh: '你好',
  },
  body: {
    en: email =>
      `You received this email because one of your friends (${email}) is giving you a Premium Ticket (worth 100 ABT) of ArcBlock DevCon2020, please download ABT Wallet and then click the button below to claim the ticket. <br /><br />`,
    zh: email =>
      `你收到此邮件是因为有朋友 (${email}) 赠予了一张价值 100 ABT 的 ArcBlock DevCon2020 的贵宾票，请下载 ABT Wallet 之后点击如下链接去领取。<br /><br />`,
  },
  tip: {
    en: url => `- This link will expire in 48 hours, please claim the ticket as soon as possible. <br />
    - ABT Wallet：https://demo.wallet.arcblockio.cn <br/>
    - DevCon WebSite：https://devcon.arcblock.io <br />
    - Your ABT Wallet setup should use the same email address that received this email. <br />
    - If your browser does not redirect correctly when click the button, please copy the link: ${url}`,
    zh: url => `- 这个链接会在 48 小时后失效，请尽快领取赠票. <br />
    - ABT Wallet 下载链接：https://demo.wallet.arcblockio.cn <br/>
    - DevCon 官方网站：https://devcon.arcblock.io <br />
    - 为了成功领取赠票，请在 ABT Wallet 钱包的身份中设置与接受此邮件相同的邮件地址. <br />
    - 如果你的浏览器没有跳转，请复制并打开链接：${url}`,
  },
  ticketFailed: {
    en: 'Failed to transfer ticket to DevCon app',
    zh: '赠票回收失败',
  },
  button: {
    en: 'Claim Ticket',
    zh: '领取赠票',
  },
  giveEventIsOver: {
    en: 'The complimentary ticket function has been disabled',
    zh: '赠票功能已经关闭',
  },
};

module.exports = {
  action: 'give_ticket',
  claims: {
    signature: async ({ extraParams: { locale } }) => {
      throw new Error(messages.giveEventIsOver[locale]);
    },
  },

  onAuth: async ({ claims, userDid, extraParams: { locale, email, ticket } }) => {
    try {
      const claim = claims.find(x => x.type === 'signature');
      const tx = ForgeSDK.decodeTx(claim.origin);

      console.info('giveTicket.onAuth', { claims, userDid, tx });

      const hash = await ForgeSDK.sendTransferTx(
        {
          tx,
          wallet: ForgeSDK.Wallet.fromAddress(userDid),
          signature: claim.sig,
        },
        { conn: env.chainId }
      );
      console.info('giveTicket.collect', { hash });

      try {
        const user = await User.findOne({ did: userDid });
        const verifyToken = await VerificationToken.generate(email, ticket, userDid);
        const verifyLink = `${env.baseUrl}/api/tickets/claim/${verifyToken}/${locale}`;

        const result = await mail.send({
          to: email,
          subject: messages.claimTicket[locale],
          hi: messages.hi[locale],
          body: messages.body[locale](user.email),
          tip: messages.tip[locale](verifyLink),
          buttonText: messages.button[locale],
          buttonLink: verifyLink,
        });
        console.info('send mail for giving ticket', result);

        // await storage.update(token, { verifyLink });
      } catch (err) {
        console.error('email.send.err', err);
        throw new Error(messages.sendFailed[locale]);
      }

      return { hash, tx: claim.origin };
    } catch (err) {
      console.error('ticket.destroy.error', err);
      throw new Error(messages.ticketFailed[locale]);
    }
  },
};
