/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const mongoose = require('mongoose');
const ForgeSDK = require('@arcblock/forge-sdk');
const { wallet, localFactory: assetFactory } = require('../../api/libs/auth');
const env = require('../../api/libs/env');
const teams = require('./team_data');
const { ensureAsset } = require('../../api/libs/util');
const { BadgeRecord } = require('../../api/models');

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

(async () => {
  try {
    // 高级徽章领取
    // 1. 读取白名单
    // 2. 验证白名单 DID
    //    2.1  DID 在链上状态正常
    //    2.2  DID 是 DevCon 的地址 （TODO: 具体方案待讨论）
    // 3. 开启任务生成 badge 并转账过去
    //    3.1 顶级的只生成 1 ~ 5 张
    //    3.2 高级的 10~50 张
    //    3.3 普通的纯随机不限制
    // 团队徽章 - 高级徽章
    for (let i = 0; i < teams.length; i++) {
      const team = teams[i];
      const teamMembers = team.members;
      for (let j = 0; j < teamMembers.length; j++) {
        const accountState = await ForgeSDK.getAccountState({ address: teamMembers[j].did });
        if (accountState.code === 'OK' && accountState.state) {
          const badgeType = 'DevCon2020HackathonBadge-team';
          // check if the account has got the nft
          // check mongodb
          const exist = await BadgeRecord.findOne({
            did: teamMembers[j].did,
            badgeType,
          });
          if (exist) {
            console.log(
              `The ${teamMembers[j].did} has got the DevCon2020HackathonBadge-team badge before, so just skip`
            );
            continue;
          }
          const asset = await ensureAsset(assetFactory, {
            userPk: accountState.state.pk,
            userDid: accountState.state.address,
            type: 'badge',
            vcType: badgeType,
            name: `${team.name} - 团队徽章`,
            description: `Grant a DevCon2020 Hackathon Badge to team: ${team.name}`,
            location: 'Online',
            backgroundUrl: '',
            logoUrl: 'https://releases.arcblockio.cn/arcblock-logo.png',
            startTime: '2020-06-19T00:00:00.000Z',
            endTime: '2222-06-19T23:59:59.000Z',
          });
          await sleep(5000);
          const hash = await ForgeSDK.sendTransferTx({
            tx: {
              itx: {
                to: accountState.state.address,
                assets: [asset.address],
              },
            },
            wallet,
          });
          // insert a record to badge record
          const badgeRecord = new BadgeRecord({
            did: teamMembers[j].did,
            badgeType,
          });
          await badgeRecord.save();
          console.log(hash);
        }
      }
    }
    process.exit(1);
  } catch (err) {
    console.error(err);
    console.error(err.errors);
    process.exit(1);
  }
})();
