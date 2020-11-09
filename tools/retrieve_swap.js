require('dotenv').config();
const mongoose = require('mongoose');
const ForgeSDK = require('@arcblock/forge-sdk');
const { createRetriever } = require('@arcblock/swap-retriever');

const env = require('../api/libs/env');
const { wallet, swapStorage } = require('../api/libs/auth');

ForgeSDK.connect(env.chainHost, {
  chainId: env.chainId,
  name: env.chainId,
  default: true,
});

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

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const doRetrieve = order =>
  new Promise((resolve, reject) => {
    const retriever = createRetriever({
      traceId: order.traceId,
      offerSwapAddress: order.offerSwapAddress,
      offerUserAddress: order.offerUserAddress,
      demandSwapAddress: order.demandSwapAddress,
      demandUserAddress: order.demandUserAddress,
      offerChainHost: order.offerChainHost,
      offerChainId: order.offerChainId,
      demandChainHost: order.demandChainHost,
      demandChainId: order.demandChainId,
      retrieveWallet: wallet.toJSON(),
      checkInterval: 2000,
      autoStart: true,
      maxRetry: 60,
    });

    retriever.on('error', async args => {
      await swapStorage.update(order.traceId, { status: 'error' });
      reject(args);
    });

    // eslint-disable-next-line no-shadow
    retriever.on('retrieved.user', async ({ hash }) => {
      await swapStorage.update(order.traceId, {
        status: 'user_retrieve',
        offerRetrieveHash: hash,
      });
    });

    // eslint-disable-next-line no-shadow
    retriever.on('retrieved.both', async ({ hash }) => {
      await swapStorage.update(order.traceId, {
        status: 'both_retrieve',
        demandRetrieveHash: hash,
      });
      resolve(hash);
    });
  });

(async () => {
  try {
    await sleep(1000);
    const orders = await swapStorage.listByStatus('user_retrieve');
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      try {
        console.log('start retrieve order', order);
        await doRetrieve(order);
      } catch (err) {
        console.error('failed retrieve order', err);
      }
    }

    process.exit(1);
  } catch (err) {
    console.error(err);
    console.error(err.errors);
    process.exit(1);
  }
})();
