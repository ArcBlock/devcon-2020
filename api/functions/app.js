/* eslint-disable no-console */
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const ForgeSDK = require('@arcblock/forge-sdk');
const fallback = require('express-history-api-fallback');

const { decode } = require('../libs/jwt');
const { handlers, wallet, swapHandlers } = require('../libs/auth');

const isProduction = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NETLIFY && JSON.parse(process.env.NETLIFY);

if (!process.env.MONGO_URI) {
  throw new Error('Cannot start application without process.env.MONGO_URI');
}

// Connect to database
let isConnectedBefore = false;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, autoReconnect: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('disconnected', () => {
  console.log('Lost MongoDB connection...');
  if (!isConnectedBefore) {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, autoReconnect: true });
  }
});
mongoose.connection.on('connected', () => {
  isConnectedBefore = true;
  console.log('Connection established to MongoDB');
});
mongoose.connection.on('reconnected', () => {
  console.log('Reconnected to MongoDB');
});

// Create and config express application
const server = express();
server.use(compression());
server.use(cookieParser());
server.use(bodyParser.json({ limit: '5 mb' }));
server.use(bodyParser.urlencoded({ extended: true, limit: '5 mb' }));
server.use(cors());

server.use(
  morgan((tokens, req, res) => {
    const log = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
    ].join(' ');

    if (isProduction) {
      // Log only in AWS context to get back function logs
      console.log(log);
    }

    return log;
  })
);

server.use(bearerToken());
server.use((req, res, next) => {
  if (!req.token) {
    next();
    return;
  }

  decode(req.token)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(() => {
      next();
    });
});

// ------------------------------------------------------------------------------
// Routes: due to limitations of netlify functions, we need to import routes here
// ------------------------------------------------------------------------------
const router = express.Router();

handlers.attach(Object.assign({ app: router }, require('../routes/auth/login')));
handlers.attach(Object.assign({ app: router }, require('../routes/auth/buyFreeTicket')));
handlers.attach(Object.assign({ app: router }, require('../routes/auth/getCert')));
handlers.attach(Object.assign({ app: router }, require('../routes/auth/getBadge')));
handlers.attach(Object.assign({ app: router }, require('../routes/auth/getHackathonBadge')));
handlers.attach(Object.assign({ app: router }, require('../routes/auth/give_ticket')));
handlers.attach(Object.assign({ app: router }, require('../routes/auth/claim_ticket')));
swapHandlers.attach(Object.assign({ app: router }, require('../routes/auth/buyProTicket')));
swapHandlers.attach(Object.assign({ app: router }, require('../routes/auth/pickup_swap')));
require('../routes/session').init(router);
require('../routes/orders').init(router);
require('../routes/tickets').init(router);

// Check for application account
ForgeSDK.getAccountState({ address: wallet.toAddress() })
  .then(res => {
    if (!res.state) {
      console.log('\n----------');
      console.error('Application account not declared on chain, abort!');
      console.error('Please run `node tools/declare.js` then start the application again');
      console.log('----------\n');
      process.exit(1);
    } else {
      console.error('Application account declared on chain');
    }
  })
  .catch(err => {
    console.error(err);
    console.log('\n----------');
    console.error('Application account check failed, abort!');
    console.log('----------\n');
    process.exit(1);
  });

// ------------------------------------------------------
// This is required by netlify functions
// ------------------------------------------------------
if (isProduction) {
  if (isNetlify) {
    server.use('/.netlify/functions/app', router);
  } else {
    server.use(router);

    const staticDir = process.env.BLOCKLET_APP_ID ? './' : '../../';
    const staticRoot = path.resolve(__dirname, staticDir, 'public');
    server.use(express.static(staticRoot, { maxAge: '7d', index: ['index.html', 'index.htm'] }));
    server.get('/', (req, res) => {
      if (req && req.locale && req.locale.language) {
        res.redirect(`/${req.locale.language}`);
      } else {
        res.redirect('/en');
      }
    });
    server.use(fallback('index.html', { root: staticRoot }));
  }

  server.use((req, res) => {
    res.status(404).send('404 NOT FOUND');
  });

  // eslint-disable-next-line no-unused-vars
  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
} else {
  server.use(router);
}

// Make it serverless
exports.handler = serverless(server);
exports.server = server;
