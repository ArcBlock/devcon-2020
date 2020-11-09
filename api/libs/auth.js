const Mcrypto = require('@arcblock/mcrypto');
const ForgeSDK = require('@arcblock/forge-sdk');
const MongoStorage = require('@arcblock/did-auth-storage-mongo');
const { fromSecretKey, WalletType, fromJSON } = require('@arcblock/forge-wallet');
const SwapMongoStorage = require('@arcblock/swap-storage-mongo');
const { NFTFactory } = require('@arcblock/nft');
// eslint-disable-next-line object-curly-newline
const {
  WalletAuthenticator,
  AppAuthenticator,
  AppHandlers,
  SwapHandlers,
  WalletHandlers,
} = require('@arcblock/did-auth');
const env = require('./env');

const netlifyPrefix = '/.netlify/functions/app';
const isNetlify = process.env.NETLIFY && JSON.parse(process.env.NETLIFY);

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

if (env.chainHost) {
  ForgeSDK.connect(env.chainHost, {
    chainId: env.chainId,
    name: env.chainId,
    default: true,
  });
  if (env.assetChainHost) {
    ForgeSDK.connect(env.assetChainHost, { chainId: env.assetChainId, name: env.assetChainId });
  }
}

const wallet = fromSecretKey(process.env.APP_SK, type);
const walletJSON = wallet.toJSON();

const walletAuth = new WalletAuthenticator({
  wallet: walletJSON,
  baseUrl: isNetlify ? env.baseUrl.replace(netlifyPrefix, '') : env.baseUrl,
  appInfo: ({ baseUrl }) => ({
    name: env.appName,
    description: env.appDescription,
    icon: `${isNetlify ? baseUrl.replace(netlifyPrefix, '') : baseUrl}/images/devcon_logo.png`,
    link: isNetlify ? baseUrl.replace(netlifyPrefix, '') : baseUrl,
  }),
  chainInfo: {
    host: env.chainHost,
    id: env.chainId,
  },
});

const tokenStorage = new MongoStorage({ url: process.env.MONGO_URI });

const walletHandlers = new WalletHandlers({
  authenticator: walletAuth,
  tokenGenerator: () => Date.now().toString(),
  tokenStorage,
});

// TODO:这里需要换成 devcon 单独的 icon
const icon = 'https://releases.arcblockio.cn/dapps/labs.png';
const localFactory = new NFTFactory({
  chainId: env.chainId,
  chainHost: env.chainHost,
  wallet: fromJSON(walletJSON),
  issuer: {
    name: 'ArcBlock DevCon2020',
    url: 'https://devcon.arcblock.io',
    logo: icon,
  },
});

const appAuth = new AppAuthenticator(walletJSON);
const appHandlers = new AppHandlers(appAuth);

const swapStorage = new SwapMongoStorage({ url: process.env.MONGO_URI });

const swapHandlers = new SwapHandlers({
  authenticator: walletAuth,
  tokenStorage,
  swapStorage,
  swapContext: {
    offerChainId: env.chainId,
    offerChainHost: env.chainHost,
    demandChainId: env.assetChainId,
    demandChainHost: env.assetChainHost,
  },
  options: {
    swapKey: 'tid',
  },
});

module.exports = {
  authenticator: walletAuth,
  handlers: walletHandlers,
  appAuth,
  appHandlers,
  swapHandlers,
  wallet,
  walletJSON,
  localFactory,
  swapStorage,
};
