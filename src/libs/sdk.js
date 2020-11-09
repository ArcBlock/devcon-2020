/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
import ForgeSDK from '@arcblock/forge-sdk/lite';

let chainHost = '';
let chainId = '';
if (typeof window !== 'undefined') {
  chainHost = window.env.chainHost;
  chainId = window.env.chainId;
}

if (chainHost) {
  ForgeSDK.connect(chainHost, { chainId, name: 'app' });
  console.log(`connected to app chain: ${chainHost}`);
}

export default ForgeSDK;
