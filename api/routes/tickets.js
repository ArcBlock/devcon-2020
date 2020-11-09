/* eslint-disable no-console */
const env = require('../libs/env');
const { VerificationToken } = require('../models');

const netlifyPrefix = '/.netlify/functions/app';

const messages = {
  tokenClaimed: {
    en: 'Token already claimed',
    zh: '领取令牌已使用',
  },
};

module.exports = {
  init(app) {
    app.get('/api/tickets/claim/:token/:locale', async (req, res) => {
      try {
        const result = await VerificationToken.verify(req.params.token);
        console.info('ticket.verify.success', result);

        if (result.claimed) {
          throw new Error(messages.tokenClaimed[req.params.locale]);
        }

        if (['staging', 'production'].includes(process.env.NODE_ENV)) {
          res.redirect(
            `${env.baseUrl.replace(netlifyPrefix, '')}/${req.params.locale}/mytickets/claim?token=${
              req.params.token
            }`
          );
        } else {
          res.redirect(
            `http://localhost:8000/${req.params.locale}/mytickets/claim?token=${req.params.token}`
          );
        }
      } catch (err) {
        console.error('user.verify.error', req.params);
        res.status(400).send(err.message);
      }
    });

    app.get('/api/tickets/verify/:token', async (req, res) => {
      try {
        const result = await VerificationToken.findOne({ token: req.params.token });
        res.json(result);
      } catch (err) {
        console.error('user.verify.error', req.params);
        res.status(400).send(err.message);
      }
    });
  },
};
