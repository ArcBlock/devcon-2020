const ens = [
  {
    id: 'arcblock-badge-analysis-en',
    name: 'ArcBlock Badge Analysis',
  },
  {
    id: 'abt-dragon-en',
    name: 'ABT Dragon',
  },
  {
    id: 'block-contract-en',
    name: 'Block Contract',
  },
  {
    id: 'email-to-did-blocklet-en',
    name: 'Email to DID Blocklet',
  },
  {
    id: 'finger-guessing-game-blocklet-en',
    name: 'Finger-guessing game blocklet',
  },
  {
    id: 'imnft-digital-assets-trading-en',
    name: 'IMNFT Digital Assets Trading',
  },
  {
    id: 'lucky-ticket-en',
    name: 'Lucky Ticket',
  },
  {
    id: 'nft-marketplace-en',
    name: 'NFT Marketplace',
  },
  {
    id: 'nft-analysis-en',
    name: 'NFT Analysis',
  },
  {
    id: 'snake-game-blocklet-en',
    name: 'Snake Game Blocklet',
  },
];

const zhs = [
  {
    id: 'arcblock-badge-analysis-zh',
    name: 'ArcBlock 徽章分析',
  },
  {
    id: 'abt-dragon-zh',
    name: 'ABT Dragon',
  },
  {
    id: 'block-contract-zh',
    name: '区块合同',
  },
  {
    id: 'email-to-did-blocklet-zh',
    name: 'Email to DID Blocklet',
  },
  {
    id: 'finger-guessing-game-blocklet-zh',
    name: '石头剪刀布游戏',
  },
  {
    id: 'imnft-digital-assets-trading-zh',
    name: 'IMNFT ABT 纪念币',
  },
  {
    id: 'lucky-ticket-zh',
    name: '幸运抽奖小游戏',
  },
  {
    id: 'nft-marketplace-zh',
    name: 'NFT 市场',
  },
  {
    id: 'nft-analysis-zh',
    name: 'NFT 分析平台',
  },
  {
    id: 'snake-game-blocklet-zh',
    name: '贪吃蛇小游戏',
  },
];

function getHackathonItemsByLocale(locale) {
  if (locale === 'zh') {
    return zhs;
  }
  return ens;
}

module.exports = {
  getHackathonItemsByLocale,
};
