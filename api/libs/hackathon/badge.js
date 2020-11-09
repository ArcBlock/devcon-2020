/* eslint-disable max-len */
const ForgeSDK = require('@arcblock/forge-sdk');
const Mcrypto = require('@arcblock/mcrypto');
const { getBadgeContentOne } = require('./badge_content_one');
const { getBadgeContentTwo } = require('./badge_content_two');
const { getBadgeContentThree } = require('./badge_content_three');
const { getBadgeContentFour } = require('./badge_content_four');
const { getBadgeContentFive } = require('./badge_content_five');
const { getBadgeContentSix } = require('./badge_content_six');
const { getBadgeContentSeven } = require('./badge_content_seven');
const { getBadgeContentEight } = require('./badge_content_eight');

const { getBorderCommon } = require('./badge_border_common');
const { getBorderTeam } = require('./badge_border_team');
const { getBorderProject } = require('./badge_border_project');
const { getBorderWinner } = require('./badge_border_winner');

// userType: 0--观众，1--团队，2--项目，3--获奖, 4--人气
function quadrantsByUserType(userType) {
  if (userType === 3 || userType === 4) {
    return [3]; // 第四象限
  }
  if (userType === 2 || userType === 1) {
    return [2]; // 第三象限
  }
  return [0, 1]; // 第四象限
}

const quadrants = [
  {
    x: '1728.865',
    y: '0',
    translateX: '-1728.865',
    translateY: '0',
  },
  {
    x: '0',
    y: '0',
    translateX: '0',
    translateY: '0',
  },
  {
    x: '0',
    y: '1583.85',
    translateX: '0',
    translateY: '-1583.85',
  },
  {
    x: '1728.865',
    y: '1583.85',
    translateX: '-1728.865',
    translateY: '-1583.85',
  },
];

function getFactors(userDid, userType) {
  const binary = ForgeSDK.Util.fromBase58(userDid);
  const topic = ForgeSDK.Util.toBuffer(ForgeSDK.Util.utf8ToHex(userType.toString()));
  const originHex = ForgeSDK.Util.toHex(Buffer.concat([binary, topic]))
    .replace(/^0x/, '')
    .toUpperCase();
  const hex = Mcrypto.Hasher.SHA2.hash224(originHex);
  const factors = [];
  const total = hex;
  const factorCount = 19;
  const factorLength = Math.floor(hex.length / factorCount);
  for (let i = 0; i < factorCount; i++) {
    const factor = total.slice(i * factorLength, i * factorLength + factorLength);
    factors.push(ForgeSDK.Util.hexToNumber(factor));
  }
  return factors;
}

function getHackthonBadge(userDid, userType, name, sessionId) {
  // userType: 0--观众，1--团队，2--项目，3--获奖, 4--人气
  const factors = getFactors(userDid, `${userType}-${sessionId}`);

  const factorForContentBlend = factors[0];
  const factorForContent = factors[1];
  const factorForQuadrantIndex = factors[2];

  const badgeContents = [
    getBadgeContentOne(factorForContentBlend),
    getBadgeContentTwo(factorForContentBlend),
    getBadgeContentThree(factorForContentBlend),
    getBadgeContentFour(factorForContentBlend),
    getBadgeContentFive(factorForContentBlend),
    getBadgeContentSix(factorForContentBlend),
    getBadgeContentSeven(factorForContentBlend),
    getBadgeContentEight(factorForContentBlend),
  ];

  let border;
  if (userType === 3 || userType === 4) {
    border = getBorderWinner(name);
  } else if (userType === 2) {
    border = getBorderProject(name);
  } else if (userType === 1) {
    border = getBorderTeam(name);
  } else {
    border = getBorderCommon(name);
  }

  const allQuadrantIndexs = quadrantsByUserType(userType);
  const quadrantIndex = allQuadrantIndexs[factorForQuadrantIndex % allQuadrantIndexs.length];
  const quadrant = quadrants[quadrantIndex];
  const badgeContent = badgeContents[factorForContent % badgeContents.length];

  return `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 2091.47 2290.46"
>
  <g style="transform: translate(178px, 196px);">
    <defs>
      <clipPath id="clipPath-${quadrantIndex}">
        <rect x="${quadrant.x}" y="${quadrant.y}" width="1728.865" height="1583.85" />
      </clipPath>
    </defs>
    <g clip-path="url(#clipPath-${quadrantIndex})" transform="translate(${quadrant.translateX},${quadrant.translateY})" viewBox="0 0 3457.73 3167.7">
      <!-- 徽章内容 -->
      ${badgeContent}
    </g>
  </g>
  <!-- 徽章边框 -->
  ${border}
</svg>
  `;
}

module.exports = { getHackthonBadge };
