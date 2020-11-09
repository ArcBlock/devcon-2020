const nodemailer = require('nodemailer');
const getTemplate = require('./email_template');

const mailGunUser = process.env.MAILGUN_USER || process.env.MAILGUN_SMTP_USER;
const mailGunPwd = process.env.MAILGUN_PASSWORD || process.env.MAILGUN_SMTP_PASSWORD;

if (!mailGunUser) {
  throw new Error('Requires process.env.MAILGUN_USER to start');
}

if (!mailGunPwd) {
  throw new Error('Requires process.env.MAILGUN_PASSWORD to start');
}

const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: mailGunUser,
    pass: mailGunPwd,
  },
});

module.exports = {
  send({ to, subject, hi, body, buttonLink, buttonText, tip, from = 'noreply@arcblockio.cn' }) {
    const html = getTemplate({ hi, subject, body, buttonLink, buttonText, tip });
    return new Promise((resolve, reject) => {
      transporter.sendMail({ from, to, subject, html }, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
};
