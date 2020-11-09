const blendOneStyle = id => `
  mix-blend-mode: hue;
  fill: url(#${id}-one);
`;
const blendOneLinearGradient = id => `
  <linearGradient
  id="${id}-one"
  x1="610.09"
  y1="3519.94"
  x2="2845.69"
  y2="-352.24"
  gradientUnits="userSpaceOnUse"
  >
    <stop offset="0.34" stop-color="#133753" />
    <stop offset="0.65" stop-color="#012e3d" />
  </linearGradient>
`;

const blendTwoStyle = id => `
  mix-blend-mode: hue;
  fill: url(#${id}-two);
`;

const blendTwoLinearGradient = id => `
  <linearGradient
  id="${id}-two"
  x1="1724.06"
  y1="320.47"
  x2="1732.68"
  y2="3163.08"
  gradientUnits="userSpaceOnUse"
  >
    <stop offset="0.24" stop-color="#9898cf" />
    <stop offset="1" stop-color="#e16868" />
  </linearGradient>
`;

const blendThreeStyle = id => `
  mix-blend-mode: multiply;
  fill: url(#${id}-three);
`;

const blendThreeLinearGradient = id => `
  <linearGradient
  id="${id}-three"
  x1="1724.06"
  y1="320.47"
  x2="1732.68"
  y2="3163.08"
  gradientUnits="userSpaceOnUse"
  >
    <stop offset="0.24" stop-color="#9898cf" />
    <stop offset="1" stop-color="#e16868" />
  </linearGradient>
`;

const blendFourStyle = id => `
  mix-blend-mode: hue;
  fill: url(#${id}-four);
`;

const blendFourLinearGradient = id => `
  <linearGradient
  id="${id}-four"
  x1="1724.06"
  y1="320.47"
  x2="1732.68"
  y2="3163.08"
  gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" stop-color="#319894" />
    <stop offset="0.32" stop-color="#3198cf" />
    <stop offset="0.56" stop-color="#7f83a1" />
    <stop offset="1" stop-color="#927e96" />
  </linearGradient>
`;

const blendFiveStyle = id => `
  opacity: 0.48;
  mix-blend-mode: luminosity;
  fill: url(#${id}-five);
`;

const blendFiveLinearGradient = id => `
  <linearGradient
  id="${id}-five"
  x1="1724.06"
  y1="320.47"
  x2="1732.68"
  y2="3163.08"
  gradientUnits="userSpaceOnUse"
  >
    <stop offset="0" stop-color="#ffa76b" />
    <stop offset="1" stop-color="#e16868" />
  </linearGradient>
`;

function getBlend(factor, id) {
  const allBlends = [
    [blendOneStyle(id), blendOneLinearGradient(id)],
    [blendTwoStyle(id), blendTwoLinearGradient(id)],
    [blendThreeStyle(id), blendThreeLinearGradient(id)],
    [blendFourStyle(id), blendFourLinearGradient(id)],
    [blendFiveStyle(id), blendFiveLinearGradient(id)],
    ['', ''],
  ];
  return allBlends[factor % allBlends.length];
}

module.exports = {
  getBlend,
};
