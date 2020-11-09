/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
const ForgeSDK = require('@arcblock/forge-sdk');
const Mcrypto = require('@arcblock/mcrypto');

// factor-0
const bgColors = ['#f58e90', '#00a79d', '#f68c57', '#d71920'];
// factor-1
const flowersColors = ['#f68c57', '#27aae1', '#ffc60b', '#f9c3d2', '#5bce99'];
// factor-2
const manShirtColors = ['#191e27', '#f68c57'];
// factor-3
const womanDressColors = ['#e7685d', '#191e27', '#5bce99', '#f4eeed', '#d71920', '#5085b6'];
// factor-4
const skinColors = ['#fcccac', '#d18855', '#8d5228'];
// factor-5
const hairColors = ['#191e27', '#663c27', '#f4e0be'];
// factor-17
const dogLightColors = ['#414042', '#c39a43', '#51412d'];
const dogDarkColors = ['#2d2e2e', '#8d682d', '#3d3222'];

function getFactors(userDid, topId) {
  const binary = ForgeSDK.Util.fromBase58(userDid);
  const topic = ForgeSDK.Util.toBuffer(ForgeSDK.Util.utf8ToHex(topId));
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

function getBgPart(isPro, factors) {
  let color;
  if (isPro) {
    color = bgColors[factors[0] % bgColors.length];
  } else {
    color = '#00a79d';
  }
  return `
      <g id="BG" transform="translate(6.27 7)" viewBox="0 0 35.75 42.44">
        <rect style="fill: ${color};" width="35.75" height="42.44" />
      </g>
  `;
}

const cloudOnePart = `
    <g
      id="SKY_ELEMENTS"
      transform="translate(4.5 13)"
      viewBox="0 0 39.72 37.7"
    >
      <defs>
        <style>
          .cls-cloud-one-1 {
            fill: #f1f2f2;
            opacity: 0.5;
          }
        </style>
      </defs>
      <path
        class="cls-cloud-one-1"
        d="M56.2,70.07v7.39H54.82v14H33.34V91H17.24V71.7l-.76-.18.57-15a1,1,0,0,1,1.32,0S18.58,52.92,22,54a2.78,2.78,0,0,1,1.85,4.18.6.6,0,0,1,.81.57s4.14.24,2,5.79c0,0,1.85-.61,1.64,1.61,0,0,3.18-.89,4.75,1.68,0,0,5.25-.51,7.11,1.59h2.77c.25-.85,2.1-6.3,8.23-4.64,0,0,.32-4.1,3.64-3.92L55,70.07Z"
        transform="translate(-16.48 -53.78)"
      />
    </g>
`;

const cloudTwoPart = `
<g
  id="SKY_ELEMENTS"
  transform="translate(5 19)"
  viewBox="0 0 37.28 31.7"
>
  <defs>
    <style>
      .cls-cloud-two-1 {
        fill: #f1f2f2;
        opacity: 0.5;
      }
    </style>
  </defs>
  <path
    class="cls-cloud-two-1"
    d="M17.14,69.62s4.24-9.5,9.82-1.83c0,0,3.83-13.58,12.72-4.28,0,0,3.77-3.3,5.46,1.38,0,0,7.08-4.78,9.29,3.78v23L17.14,92Z"
    transform="translate(-17.14 -60.26)"
  />
</g>
`;

const birdTwoPart = `
    <g id="SKY_ELEMENTS" transform="translate(13 12)" viewBox="0 0 6.4 1.91">
      <defs>
        <style>
          .cls-bird-two-1 {
            fill: none;
            stroke: #414042;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 0.25px;
          }
        </style>
      </defs>
      <path
        class="cls-bird-two-1"
        d="M31.81,53.54c-1.4-.34-1.75.69-1.75.69-.59-1-1.86-.49-1.86-.49"
        transform="translate(-25.53 -53.35)"
      />
      <path
        class="cls-bird-two-1"
        d="M28.2,54.64c-1-.24-1.23.49-1.23.49-.42-.74-1.32-.35-1.32-.35"
        transform="translate(-25.53 -53.35)"
      />
    </g>
`;

const birdThreePart = `
<g
  id="SKY_ELEMENTS"
  transform="translate(33 15)"
  viewBox="0 0 8.17 4.67"
>
  <defs>
    <style>
      .cls-bird-three-1 {
        fill: none;
        stroke: #414042;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 0.25px;
      }
    </style>
  </defs>
  <path
    class="cls-bird-three-1"
    d="M50.81,58.72c-2.09-.51-2.61,1-2.61,1-.89-1.57-2.79-.74-2.79-.74"
    transform="translate(-42.76 -56.09)"
  />
  <path
    class="cls-bird-three-1"
    d="M47.87,56.28c-1.4-.34-1.75.7-1.75.7-.59-1-1.86-.5-1.86-.5"
    transform="translate(-42.76 -56.09)"
  />
  <path
    class="cls-bird-three-1"
    d="M46.5,60c-1.4-.35-1.75.69-1.75.69-.59-1-1.86-.5-1.86-.5"
    transform="translate(-42.76 -56.09)"
  />
</g>
`;

const moonPart = `
    <g id="SKY_ELEMENTS" transform="translate(22 9)" viewBox="0 0 2.94 4.36">
      <defs>
        <style>
          .cls-moon-1 {
            fill: #fcdd7c;
          }
        </style>
      </defs>
      <path
        class="cls-moon-1"
        d="M37.61,55.29a2.18,2.18,0,1,1,0-4.08,2.18,2.18,0,0,0,0,4.08Z"
        transform="translate(-34.67 -51.07)"
      />
    </g>
`;

const sunPart = `
<g
  id="SKY_ELEMENTS"
  transform="translate(31 13)"
  viewBox="0 0 4.35 4.35"
>
  <defs>
    <style>
      .cls-sun-1 {
        fill: #f05128;
      }
    </style>
  </defs>
  <circle class="cls-sun-1" cx="2.18" cy="2.18" r="2.18" />
</g>
`;

const groundPart = `
<g
  xmlns="http://www.w3.org/2000/svg"
  transform="translate(4.5 28)"
  viewBox="0 0 39.49 22.5"
>
  <defs>
    <style>
      .cls-ground-1 {
        fill: #5a8944;
      }
      .cls-ground-2,
      .cls-ground-4 {
        fill: #3d7d4c;
      }
      .cls-ground-3 {
        fill: #2c563e;
        stroke: #2c563e;
      }
      .cls-ground-3,
      .cls-ground-4 {
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 0.22px;
      }
      .cls-ground-4 {
        stroke: #3d7d4c;
      }
    </style>
  </defs>
  <g id="GROUND">
    <path
      class="cls-ground-1"
      d="M54.45,70.46a45.11,45.11,0,0,0-16.14-.9c-4.52.6-8,1.84-14.65,2A59.3,59.3,0,0,1,16,71.36l1,20.35H55.47Z"
      transform="translate(-15.97 -69.21)"
    />
    <path
      class="cls-ground-2"
      d="M16,74.44s26.94-2.21,38.85,3v14l-37.89.23Z"
      transform="translate(-15.97 -69.21)"
    />
  </g>
  <g id="GROUND_ELEMENTS" data-name="GROUND ELEMENTS">
    <circle class="cls-ground-3" cx="35.28" cy="18.09" r="0.12" />
    <circle class="cls-ground-3" cx="31.34" cy="15.82" r="0.12" />
    <circle class="cls-ground-3" cx="36.1" cy="12.83" r="0.12" />
    <circle class="cls-ground-3" cx="28.89" cy="10.56" r="0.12" />
    <circle class="cls-ground-3" cx="30.61" cy="12.16" r="0.12" />
    <circle class="cls-ground-3" cx="29.84" cy="10.43" r="0.12" />
    <circle class="cls-ground-3" cx="12.61" cy="11.57" r="0.12" />
    <circle class="cls-ground-3" cx="7.49" cy="13.43" r="0.12" />
    <circle class="cls-ground-3" cx="6.21" cy="12.83" r="0.12" />
    <circle class="cls-ground-3" cx="18.67" cy="20.76" r="0.12" />
    <circle class="cls-ground-3" cx="20.17" cy="19.74" r="0.12" />
    <circle class="cls-ground-3" cx="17.33" cy="19.61" r="0.12" />
    <circle class="cls-ground-3" cx="14.03" cy="10.99" r="0.12" />
    <circle class="cls-ground-3" cx="14.34" cy="11.82" r="0.12" />
    <circle class="cls-ground-3" cx="6.21" cy="11.57" r="0.12" />
    <circle class="cls-ground-3" cx="19.55" cy="17.5" r="0.12" />
    <circle class="cls-ground-3" cx="15.95" cy="18.5" r="0.12" />
    <circle class="cls-ground-3" cx="12.32" cy="20.26" r="0.12" />
    <circle class="cls-ground-3" cx="34.23" cy="19.21" r="0.12" />
    <circle class="cls-ground-3" cx="35.62" cy="17.62" r="0.12" />
    <circle class="cls-ground-3" cx="34.79" cy="17.8" r="0.12" />
    <circle class="cls-ground-3" cx="24.3" cy="11.24" r="0.12" />
    <circle class="cls-ground-3" cx="26.96" cy="11.62" r="0.12" />
    <circle class="cls-ground-3" cx="19.04" cy="10.87" r="0.12" />
    <circle class="cls-ground-3" cx="7.37" cy="6.29" r="0.12" />
    <circle class="cls-ground-3" cx="5.03" cy="7.34" r="0.12" />
    <circle class="cls-ground-3" cx="7.74" cy="7.34" r="0.12" />
    <circle class="cls-ground-3" cx="19.04" cy="6.99" r="0.12" />
    <circle class="cls-ground-3" cx="21.28" cy="8.98" r="0.12" />
    <circle class="cls-ground-3" cx="20.45" cy="9.17" r="0.12" />
    <circle class="cls-ground-3" cx="24.63" cy="20.14" r="0.12" />
    <circle class="cls-ground-3" cx="17.33" cy="14.82" r="0.12" />
    <circle class="cls-ground-3" cx="8.42" cy="16.78" r="0.12" />
    <circle class="cls-ground-4" cx="25.18" cy="3.87" r="0.12" />
    <circle class="cls-ground-4" cx="27.45" cy="2.3" r="0.12" />
    <circle class="cls-ground-4" cx="26.62" cy="2.49" r="0.12" />
    <circle class="cls-ground-4" cx="28.71" cy="4.43" r="0.12" />
    <circle class="cls-ground-4" cx="35.15" cy="5.6" r="0.12" />
    <circle class="cls-ground-4" cx="34.31" cy="5.78" r="0.12" />
    <circle class="cls-ground-4" cx="16.07" cy="2.79" r="0.12" />
    <circle class="cls-ground-4" cx="20.21" cy="3.99" r="0.12" />
    <circle class="cls-ground-4" cx="19.38" cy="4.18" r="0.12" />
    <circle class="cls-ground-4" cx="4.23" cy="4.3" r="0.12" />
    <circle class="cls-ground-4" cx="9.6" cy="3.72" r="0.12" />
    <circle class="cls-ground-4" cx="3.64" cy="3.98" r="0.12" />
    <circle class="cls-ground-4" cx="31.72" cy="3.1" r="0.12" />
    <circle class="cls-ground-4" cx="33.06" cy="2.36" r="0.12" />
    <circle class="cls-ground-4" cx="31.5" cy="3.86" r="0.12" />
    <circle class="cls-ground-4" cx="34.03" cy="2.14" r="0.12" />
    <circle class="cls-ground-4" cx="34.65" cy="2.71" r="0.12" />
    <circle class="cls-ground-4" cx="33.82" cy="2.9" r="0.12" />
    <circle class="cls-ground-4" cx="22.42" cy="1.87" r="0.12" />
    <circle class="cls-ground-4" cx="23.04" cy="2.44" r="0.12" />
    <circle class="cls-ground-4" cx="22.21" cy="2.63" r="0.12" />
  </g>
</g>
`;

const farawayGroundPart = `
<g id="GROUND" viewBox="0 0 20.43 4.87" transform="translate(4 27)">
  <defs>
    <style>
      .cls-far-away-ground-1 {
        fill: #5a8944;
        opacity: 0.62;
      }
    </style>
  </defs>
  <path
    class="cls-far-away-ground-1"
    d="M16.48,69.47s11.83-1.34,20.43,1.37l-.21,2.09L17.91,74Z"
    transform="translate(-16.48 -69.14)"
  />
</g>
`;

const farawayWallPart = `
<g id="SKY_ELEMENTS" transform="translate(7 27.5)" viewBox="0 0 17.09 3.9">
  <defs>
    <style>
      .cls-faraway-wall-1 {
        fill: #bcbec0;
      }
    </style>
  </defs>
  <path
    class="cls-faraway-wall-1"
    d="M33.86,69.54v.92H32.68V68.72h-1.3v.82h-2v-.82h-1.7A1.25,1.25,0,0,0,26.4,70v.17H25v-.6H21.93v.6H21v-.93H20.6v.93h-1a1.24,1.24,0,0,0-1.25,1.24h0a1.25,1.25,0,0,0,1.25,1.25H26.8v-.51h2.55v-.74h1.18v.74H35.4V69.54Z"
    transform="translate(-18.31 -68.72)"
  />
</g>
`;

const oneSheepPart = `
<g
  id="Layer_12"
  transform="translate(11 36)"
  viewBox="0 0 4.4 3.65"
>
  <defs>
    <style>
      .cls-one-sheep-1 {
        fill: none;
        stroke: #414042;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 0.3px;
      }
      .cls-one-sheep-2 {
        fill: #f1f2f2;
      }
      .cls-one-sheep-3 {
        fill: #2d2e2e;
      }
    </style>
  </defs>
  <line class="cls-one-sheep-1" x1="3.5" y1="2.25" x2="3.58" y2="2.74" />
  <line class="cls-one-sheep-1" x1="1.44" y1="3.23" x2="1.21" y2="2.36" />
  <path
    class="cls-one-sheep-2"
    d="M25,86.51s-.06-.81.29-1.05a.18.18,0,0,0,.07-.1.76.76,0,0,1,.59-.57.17.17,0,0,0,.1,0,1.91,1.91,0,0,1,1.36-.31h.13c.19,0,.77-.14.94.29a.74.74,0,0,1,.24.94.17.17,0,0,0,0,.1c0,.16.07.61-.24.72a.26.26,0,0,0-.11.07,1.4,1.4,0,0,1-1,.51l-.07,0a1.64,1.64,0,0,1-.88.08h-.06a1.57,1.57,0,0,1-1.18-.31C24.79,86.45,25,86.51,25,86.51Z"
    transform="translate(-24.45 -84.41)"
  />
  <path
    class="cls-one-sheep-3"
    d="M24.83,86.41a1.11,1.11,0,0,0-.29.39c-.1.23-.14.6,0,.69s1.11-.44.91-.92A.41.41,0,0,0,24.83,86.41Z"
    transform="translate(-24.45 -84.41)"
  />
  <path
    class="cls-one-sheep-3"
    d="M25.25,86.57c.11-.14.37-.44.66-.36,0,0,0,0,0,0s-.09.24-.64.38C25.26,86.62,25.24,86.59,25.25,86.57Z"
    transform="translate(-24.45 -84.41)"
  />
  <line class="cls-one-sheep-1" x1="1.91" y1="3.5" x2="1.89" y2="2.57" />
  <path
    class="cls-one-sheep-1"
    d="M28.41,86.23a2.26,2.26,0,0,0,.29.91"
    transform="translate(-24.45 -84.41)"
  />
  <path
    class="cls-one-sheep-3"
    d="M25,86.6c-.1-.14-.28-.49-.11-.74h0c.06,0,.19.18.13.74C25,86.62,25,86.63,25,86.6Z"
    transform="translate(-24.45 -84.41)"
  />
</g>
`;

const lessSheepPart = `
<g
  id="Layer_12"
  transform="translate(7 33)"
  viewBox="0 0 24.8 15.62"
>
  <defs>
    <style>
      .cls-less-sheep-1 {
        fill: none;
        stroke: #414042;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 0.3px;
      }
      .cls-less-sheep-2 {
        fill: #f1f2f2;
      }
      .cls-less-sheep-3 {
        fill: #2d2e2e;
      }
    </style>
  </defs>
  <line
    class="cls-less-sheep-1"
    x1="18.02"
    y1="7.53"
    x2="18.1"
    y2="8.02"
  />
  <line
    class="cls-less-sheep-1"
    x1="15.96"
    y1="8.51"
    x2="15.74"
    y2="7.63"
  />
  <path
    class="cls-less-sheep-2"
    d="M35.09,81s-.05-.81.29-1a.2.2,0,0,0,.08-.1.73.73,0,0,1,.59-.56l.1,0a1.85,1.85,0,0,1,1.36-.32.25.25,0,0,0,.12,0c.19,0,.78-.14.94.28a.75.75,0,0,1,.25.94.21.21,0,0,0,0,.11c0,.15.06.61-.25.71a.36.36,0,0,0-.1.07,1.36,1.36,0,0,1-1,.52h-.08a1.51,1.51,0,0,1-.88.08s0,0-.05,0a1.67,1.67,0,0,1-1.19-.32C34.88,80.94,35.09,81,35.09,81Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M34.92,80.91a1,1,0,0,0-.29.38c-.1.23-.14.6,0,.69s1.11-.43.91-.92A.4.4,0,0,0,34.92,80.91Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M35.34,81.06c.11-.14.37-.44.66-.36,0,0,0,0,0,0s-.1.23-.64.37C35.35,81.12,35.32,81.08,35.34,81.06Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="16.43"
    y1="8.78"
    x2="16.41"
    y2="7.85"
  />
  <path
    class="cls-less-sheep-1"
    d="M38.5,80.73a2.19,2.19,0,0,0,.29.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M35.07,81.1c-.1-.15-.29-.5-.12-.75h0c.06,0,.19.17.13.73C35.12,81.11,35.08,81.12,35.07,81.1Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="23.9"
    y1="14.22"
    x2="23.98"
    y2="14.7"
  />
  <line
    class="cls-less-sheep-1"
    x1="21.84"
    y1="15.2"
    x2="21.62"
    y2="14.32"
  />
  <path
    class="cls-less-sheep-2"
    d="M41,87.69s0-.81.29-1a.25.25,0,0,0,.08-.1.74.74,0,0,1,.59-.57.19.19,0,0,0,.1,0,1.85,1.85,0,0,1,1.36-.31.24.24,0,0,0,.12,0c.19,0,.78-.14.94.29a.75.75,0,0,1,.25.94.17.17,0,0,0,0,.1c0,.16.06.61-.25.72a.23.23,0,0,0-.1.07,1.4,1.4,0,0,1-1,.51l-.08,0a1.65,1.65,0,0,1-.88.07h0A1.65,1.65,0,0,1,41.17,88C40.76,87.63,41,87.69,41,87.69Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M40.8,87.59a1,1,0,0,0-.29.39c-.1.23-.14.6,0,.69s1.11-.44.91-.93A.41.41,0,0,0,40.8,87.59Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M41.22,87.74c.11-.14.37-.43.66-.36a.05.05,0,0,1,0,0c0,.07-.1.24-.64.37A0,0,0,0,1,41.22,87.74Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="22.31"
    y1="15.47"
    x2="22.29"
    y2="14.54"
  />
  <path
    class="cls-less-sheep-1"
    d="M44.38,87.41a2.19,2.19,0,0,0,.29.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M41,87.78c-.1-.15-.29-.49-.12-.74a0,0,0,0,1,.05,0c.06,0,.19.18.13.74C41,87.8,41,87.81,41,87.78Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="7.65"
    y1="4.11"
    x2="7.73"
    y2="4.59"
  />
  <line
    class="cls-less-sheep-1"
    x1="5.59"
    y1="5.08"
    x2="5.37"
    y2="4.21"
  />
  <path
    class="cls-less-sheep-2"
    d="M24.72,77.58s0-.81.29-1a.28.28,0,0,0,.08-.11.73.73,0,0,1,.59-.56.19.19,0,0,0,.1,0,1.89,1.89,0,0,1,1.36-.32.17.17,0,0,0,.12,0c.19,0,.78-.14.94.29a.73.73,0,0,1,.25.93.21.21,0,0,0,0,.11c0,.15.06.61-.25.71a.25.25,0,0,0-.1.08,1.42,1.42,0,0,1-1,.51l-.08,0a1.65,1.65,0,0,1-.88.07h-.05a1.64,1.64,0,0,1-1.19-.31C24.51,77.52,24.72,77.58,24.72,77.58Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M24.55,77.48a1,1,0,0,0-.29.39c-.1.23-.14.59,0,.68s1.11-.43.91-.92A.41.41,0,0,0,24.55,77.48Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M25,77.63c.11-.14.37-.44.66-.36a.05.05,0,0,1,0,0c0,.07-.1.24-.65.37C25,77.69,25,77.66,25,77.63Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="6.06"
    y1="5.35"
    x2="6.04"
    y2="4.43"
  />
  <path
    class="cls-less-sheep-1"
    d="M28.13,77.3a2.19,2.19,0,0,0,.29.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M24.7,77.67c-.1-.15-.29-.5-.12-.74,0,0,0,0,.05,0s.19.18.12.73C24.75,77.68,24.71,77.69,24.7,77.67Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="0.82"
    y1="2.25"
    x2="0.75"
    y2="2.74"
  />
  <line
    class="cls-less-sheep-1"
    x1="2.63"
    y1="3.23"
    x2="2.83"
    y2="2.36"
  />
  <path
    class="cls-less-sheep-2"
    d="M23.43,75.72s.05-.81-.25-1a.14.14,0,0,1-.07-.1c0-.16-.18-.52-.52-.56l-.09,0a1.5,1.5,0,0,0-1.2-.32.22.22,0,0,1-.11,0c-.17,0-.69-.14-.83.29a.77.77,0,0,0-.22.93.21.21,0,0,1,0,.11c0,.15-.06.61.22.71a.31.31,0,0,1,.09.07,1.17,1.17,0,0,0,.85.52h.07a1.22,1.22,0,0,0,.78.08h.05a1.34,1.34,0,0,0,1.05-.32C23.62,75.66,23.43,75.72,23.43,75.72Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M23.59,75.63a1,1,0,0,1,.25.38c.09.23.13.6,0,.69s-1-.43-.8-.92A.34.34,0,0,1,23.59,75.63Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M23.21,75.78c-.09-.14-.32-.44-.58-.36,0,0,0,0,0,0s.09.23.57.37A0,0,0,0,0,23.21,75.78Z"
    transform="translate(-20.02 -73.62)"
  />
  <line class="cls-less-sheep-1" x1="2.22" y1="3.5" x2="2.24" y2="2.57" />
  <path
    class="cls-less-sheep-1"
    d="M20.42,75.45a2.39,2.39,0,0,1-.25.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M23.46,75.82c.08-.15.25-.5.1-.74a0,0,0,0,0,0,0c-.06,0-.17.17-.12.73C23.41,75.83,23.44,75.84,23.46,75.82Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="19.11"
    y1="2.42"
    x2="19.04"
    y2="2.9"
  />
  <line
    class="cls-less-sheep-1"
    x1="20.93"
    y1="3.4"
    x2="21.13"
    y2="2.52"
  />
  <path
    class="cls-less-sheep-2"
    d="M41.73,75.89s.05-.81-.26-1a.21.21,0,0,1-.06-.1c0-.16-.18-.53-.53-.57a.11.11,0,0,1-.08,0,1.55,1.55,0,0,0-1.21-.31.2.2,0,0,1-.11,0c-.16,0-.68-.14-.83.29a.79.79,0,0,0-.21.94.34.34,0,0,1,0,.1c0,.16-.06.61.21.72a.2.2,0,0,1,.09.07,1.22,1.22,0,0,0,.86.51l.07,0a1.31,1.31,0,0,0,.78.07h0a1.31,1.31,0,0,0,1-.31C41.92,75.83,41.73,75.89,41.73,75.89Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M41.88,75.79a1,1,0,0,1,.26.39c.09.23.12.6,0,.69s-1-.44-.81-.92A.35.35,0,0,1,41.88,75.79Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M41.51,75.94c-.09-.14-.32-.43-.58-.36,0,0,0,0,0,0s.09.24.57.37C41.5,76,41.52,76,41.51,75.94Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-less-sheep-1"
    x1="20.51"
    y1="3.67"
    x2="20.53"
    y2="2.74"
  />
  <path
    class="cls-less-sheep-1"
    d="M38.72,75.61a2.49,2.49,0,0,1-.26.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-less-sheep-3"
    d="M41.75,76a.78.78,0,0,0,.1-.74s0,0,0,0-.17.18-.11.74A0,0,0,0,0,41.75,76Z"
    transform="translate(-20.02 -73.62)"
  />
</g>
`;

const manySheepPart = `
<g id="Layer_12" transform="translate(7 32)" viewBox="0 0 32.5 16.22">
  <defs>
    <style>
      .cls-many-sheep-1 {
        fill: none;
        stroke: #414042;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 0.3px;
      }
      .cls-many-sheep-2 {
        fill: #f1f2f2;
      }
      .cls-many-sheep-3 {
        fill: #2d2e2e;
      }
    </style>
  </defs>
  <line
    class="cls-many-sheep-1"
    x1="18.02"
    y1="7.53"
    x2="18.1"
    y2="8.02"
  />
  <line
    class="cls-many-sheep-1"
    x1="15.96"
    y1="8.51"
    x2="15.74"
    y2="7.63"
  />
  <path
    class="cls-many-sheep-2"
    d="M35.09,81s-.05-.81.29-1a.2.2,0,0,0,.08-.1.73.73,0,0,1,.59-.56l.1,0a1.85,1.85,0,0,1,1.36-.32.25.25,0,0,0,.12,0c.19,0,.78-.14.94.28a.75.75,0,0,1,.25.94.21.21,0,0,0,0,.11c0,.15.06.61-.25.71a.36.36,0,0,0-.1.07,1.36,1.36,0,0,1-1,.52h-.08a1.51,1.51,0,0,1-.88.08s0,0-.05,0a1.67,1.67,0,0,1-1.19-.32C34.88,80.94,35.09,81,35.09,81Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M34.92,80.91a1,1,0,0,0-.29.38c-.1.23-.14.6,0,.69s1.11-.43.91-.92A.4.4,0,0,0,34.92,80.91Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M35.34,81.06c.11-.14.37-.44.66-.36,0,0,0,0,0,0s-.1.23-.64.37C35.35,81.12,35.32,81.08,35.34,81.06Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="16.43"
    y1="8.78"
    x2="16.41"
    y2="7.85"
  />
  <path
    class="cls-many-sheep-1"
    d="M38.5,80.73a2.19,2.19,0,0,0,.29.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M35.07,81.1c-.1-.15-.29-.5-.12-.75h0c.06,0,.19.17.13.73C35.12,81.11,35.08,81.12,35.07,81.1Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="29.87"
    y1="7.24"
    x2="29.95"
    y2="7.72"
  />
  <line
    class="cls-many-sheep-1"
    x1="27.81"
    y1="8.22"
    x2="27.58"
    y2="7.34"
  />
  <path
    class="cls-many-sheep-2"
    d="M46.94,80.71s-.06-.81.29-1a.2.2,0,0,0,.08-.1A.73.73,0,0,1,47.9,79a.19.19,0,0,0,.1,0,1.9,1.9,0,0,1,1.36-.31h.12c.19,0,.78-.14.94.29a.75.75,0,0,1,.25.94.18.18,0,0,0,0,.1c0,.16.07.61-.24.72a.23.23,0,0,0-.1.07,1.42,1.42,0,0,1-1,.51l-.08,0a1.61,1.61,0,0,1-.88.08h-.05a1.59,1.59,0,0,1-1.19-.31C46.73,80.65,46.94,80.71,46.94,80.71Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M46.77,80.61a1,1,0,0,0-.29.39c-.1.23-.14.6,0,.69s1.1-.44.91-.92A.41.41,0,0,0,46.77,80.61Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M47.19,80.77c.1-.14.37-.44.66-.37a.08.08,0,0,1,0,0c0,.07-.1.24-.65.38C47.19,80.82,47.17,80.79,47.19,80.77Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="28.28"
    y1="8.49"
    x2="28.26"
    y2="7.56"
  />
  <path
    class="cls-many-sheep-1"
    d="M50.35,80.43a2.26,2.26,0,0,0,.29.91"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M46.91,80.8c-.09-.14-.28-.49-.11-.74a0,0,0,0,1,.05,0c.06,0,.19.18.12.74C47,80.82,46.93,80.83,46.91,80.8Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="31.6"
    y1="15.83"
    x2="31.68"
    y2="16.31"
  />
  <line
    class="cls-many-sheep-1"
    x1="29.54"
    y1="16.8"
    x2="29.31"
    y2="15.93"
  />
  <path
    class="cls-many-sheep-2"
    d="M48.67,88.3s-.06-.81.29-1a.19.19,0,0,0,.07-.11.75.75,0,0,1,.6-.56.19.19,0,0,0,.1,0,1.89,1.89,0,0,1,1.36-.32.17.17,0,0,0,.12,0c.19,0,.78-.14.94.29a.73.73,0,0,1,.25.93.22.22,0,0,0,0,.11c0,.15.07.61-.24.71a.25.25,0,0,0-.1.08,1.42,1.42,0,0,1-1,.51.12.12,0,0,0-.08,0,1.65,1.65,0,0,1-.88.07h0a1.64,1.64,0,0,1-1.19-.31C48.46,88.24,48.67,88.3,48.67,88.3Z"
    transform="translate(-20.02 -72.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M48.5,88.2a1,1,0,0,0-.29.39c-.11.23-.14.59,0,.68s1.1-.43.91-.92A.41.41,0,0,0,48.5,88.2Z"
    transform="translate(-20.02 -72.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M48.92,88.35c.1-.14.37-.44.66-.36a.05.05,0,0,1,0,0c0,.07-.1.24-.65.37C48.92,88.41,48.9,88.38,48.92,88.35Z"
    transform="translate(-20.02 -72.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="30.01"
    y1="17.07"
    x2="29.99"
    y2="16.15"
  />
  <path
    class="cls-many-sheep-1"
    d="M52.08,88a2.19,2.19,0,0,0,.29.9"
    transform="translate(-20.02 -72.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M48.64,88.39c-.09-.15-.28-.5-.11-.74,0,0,0,0,0,0s.19.17.12.73A0,0,0,0,1,48.64,88.39Z"
    transform="translate(-20.02 -72.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="23.9"
    y1="15.22"
    x2="23.98"
    y2="15.7"
  />
  <line
    class="cls-many-sheep-1"
    x1="21.84"
    y1="16.2"
    x2="21.62"
    y2="15.32"
  />
  <path
    class="cls-many-sheep-2"
    d="M41,87.69s0-.81.29-1a.25.25,0,0,0,.08-.1.74.74,0,0,1,.59-.57.19.19,0,0,0,.1,0,1.85,1.85,0,0,1,1.36-.31.24.24,0,0,0,.12,0c.19,0,.78-.14.94.29a.75.75,0,0,1,.25.94.17.17,0,0,0,0,.1c0,.16.06.61-.25.72a.23.23,0,0,0-.1.07,1.4,1.4,0,0,1-1,.51l-.08,0a1.65,1.65,0,0,1-.88.07h0A1.65,1.65,0,0,1,41.17,88C40.76,87.63,41,87.69,41,87.69Z"
    transform="translate(-20.02 -72.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M40.8,87.59a1,1,0,0,0-.29.39c-.1.23-.14.6,0,.69s1.11-.44.91-.93A.41.41,0,0,0,40.8,87.59Z"
    transform="translate(-20.02 -72.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M41.22,87.74c.11-.14.37-.43.66-.36a.05.05,0,0,1,0,0c0,.07-.1.24-.64.37A0,0,0,0,1,41.22,87.74Z"
    transform="translate(-20.02 -72.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="22.31"
    y1="16.47"
    x2="22.29"
    y2="15.54"
  />
  <path
    class="cls-many-sheep-1"
    d="M44.38,87.41a2.19,2.19,0,0,0,.29.9"
    transform="translate(-20.02 -72.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M41,87.78c-.1-.15-.29-.49-.12-.74a0,0,0,0,1,.05,0c.06,0,.19.18.13.74C41,87.8,41,87.81,41,87.78Z"
    transform="translate(-20.02 -72.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="7.93"
    y1="13.04"
    x2="8.01"
    y2="13.52"
  />
  <line
    class="cls-many-sheep-1"
    x1="5.87"
    y1="14.02"
    x2="5.65"
    y2="13.14"
  />
  <path
    class="cls-many-sheep-2"
    d="M25,86.51s-.06-.81.29-1.05a.18.18,0,0,0,.07-.1.76.76,0,0,1,.59-.57.17.17,0,0,0,.1,0,1.91,1.91,0,0,1,1.36-.31h.13c.19,0,.77-.14.94.29a.74.74,0,0,1,.24.94.17.17,0,0,0,0,.1c0,.16.07.61-.24.72a.26.26,0,0,0-.11.07,1.4,1.4,0,0,1-1,.51l-.07,0a1.64,1.64,0,0,1-.88.08h-.06a1.57,1.57,0,0,1-1.18-.31C24.79,86.45,25,86.51,25,86.51Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M24.83,86.41a1.11,1.11,0,0,0-.29.39c-.1.23-.14.6,0,.69s1.11-.44.91-.92A.41.41,0,0,0,24.83,86.41Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M25.25,86.57c.11-.14.37-.44.66-.36,0,0,0,0,0,0s-.09.24-.64.38C25.26,86.62,25.24,86.59,25.25,86.57Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="6.35"
    y1="14.29"
    x2="6.32"
    y2="13.36"
  />
  <path
    class="cls-many-sheep-1"
    d="M28.41,86.23a2.26,2.26,0,0,0,.29.91"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M25,86.6c-.1-.14-.28-.49-.11-.74h0c.06,0,.19.18.13.74C25,86.62,25,86.63,25,86.6Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="7.65"
    y1="4.11"
    x2="7.73"
    y2="4.59"
  />
  <line
    class="cls-many-sheep-1"
    x1="5.59"
    y1="5.08"
    x2="5.37"
    y2="4.21"
  />
  <path
    class="cls-many-sheep-2"
    d="M24.72,77.58s0-.81.29-1a.28.28,0,0,0,.08-.11.73.73,0,0,1,.59-.56.19.19,0,0,0,.1,0,1.89,1.89,0,0,1,1.36-.32.17.17,0,0,0,.12,0c.19,0,.78-.14.94.29a.73.73,0,0,1,.25.93.21.21,0,0,0,0,.11c0,.15.06.61-.25.71a.25.25,0,0,0-.1.08,1.42,1.42,0,0,1-1,.51l-.08,0a1.65,1.65,0,0,1-.88.07h-.05a1.64,1.64,0,0,1-1.19-.31C24.51,77.52,24.72,77.58,24.72,77.58Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M24.55,77.48a1,1,0,0,0-.29.39c-.1.23-.14.59,0,.68s1.11-.43.91-.92A.41.41,0,0,0,24.55,77.48Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M25,77.63c.11-.14.37-.44.66-.36a.05.05,0,0,1,0,0c0,.07-.1.24-.65.37C25,77.69,25,77.66,25,77.63Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="6.06"
    y1="5.35"
    x2="6.04"
    y2="4.43"
  />
  <path
    class="cls-many-sheep-1"
    d="M28.13,77.3a2.19,2.19,0,0,0,.29.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M24.7,77.67c-.1-.15-.29-.5-.12-.74,0,0,0,0,.05,0s.19.18.12.73C24.75,77.68,24.71,77.69,24.7,77.67Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="0.82"
    y1="2.25"
    x2="0.75"
    y2="2.74"
  />
  <line
    class="cls-many-sheep-1"
    x1="2.63"
    y1="3.23"
    x2="2.83"
    y2="2.36"
  />
  <path
    class="cls-many-sheep-2"
    d="M23.43,75.72s.05-.81-.25-1a.14.14,0,0,1-.07-.1c0-.16-.18-.52-.52-.56l-.09,0a1.5,1.5,0,0,0-1.2-.32.22.22,0,0,1-.11,0c-.17,0-.69-.14-.83.29a.77.77,0,0,0-.22.93.21.21,0,0,1,0,.11c0,.15-.06.61.22.71a.31.31,0,0,1,.09.07,1.17,1.17,0,0,0,.85.52h.07a1.22,1.22,0,0,0,.78.08h.05a1.34,1.34,0,0,0,1.05-.32C23.62,75.66,23.43,75.72,23.43,75.72Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M23.59,75.63a1,1,0,0,1,.25.38c.09.23.13.6,0,.69s-1-.43-.8-.92A.34.34,0,0,1,23.59,75.63Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M23.21,75.78c-.09-.14-.32-.44-.58-.36,0,0,0,0,0,0s.09.23.57.37A0,0,0,0,0,23.21,75.78Z"
    transform="translate(-20.02 -73.62)"
  />
  <line class="cls-many-sheep-1" x1="2.22" y1="3.5" x2="2.24" y2="2.57" />
  <path
    class="cls-many-sheep-1"
    d="M20.42,75.45a2.39,2.39,0,0,1-.25.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M23.46,75.82c.08-.15.25-.5.1-.74a0,0,0,0,0,0,0c-.06,0-.17.17-.12.73C23.41,75.83,23.44,75.84,23.46,75.82Z"
    transform="translate(-20.02 -73.62)"
  />
  <line class="cls-many-sheep-1" x1="2.32" y1="9.52" x2="2.24" y2="10" />
  <line
    class="cls-many-sheep-1"
    x1="4.13"
    y1="10.5"
    x2="4.33"
    y2="9.62"
  />
  <path
    class="cls-many-sheep-2"
    d="M24.93,83s.05-.81-.25-1a.16.16,0,0,1-.07-.11c0-.15-.18-.52-.52-.56a.16.16,0,0,1-.09,0,1.5,1.5,0,0,0-1.2-.31h-.11c-.17,0-.69-.14-.83.29a.79.79,0,0,0-.22.94.17.17,0,0,1,0,.1c0,.15-.06.61.22.71a.34.34,0,0,1,.09.08,1.2,1.2,0,0,0,.85.51l.07,0a1.31,1.31,0,0,0,.78.07h.05a1.32,1.32,0,0,0,1.05-.31C25.12,82.93,24.93,83,24.93,83Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M25.09,82.89a1,1,0,0,1,.25.39c.09.23.13.59,0,.68s-1-.43-.8-.92A.34.34,0,0,1,25.09,82.89Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M24.71,83c-.09-.14-.32-.43-.58-.36a.05.05,0,0,0,0,0c0,.07.09.24.57.37C24.71,83.1,24.73,83.07,24.71,83Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="3.72"
    y1="10.76"
    x2="3.74"
    y2="9.84"
  />
  <path
    class="cls-many-sheep-1"
    d="M21.92,82.71a2.39,2.39,0,0,1-.25.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M25,83.08c.08-.15.25-.49.1-.74,0,0,0,0,0,0s-.17.18-.12.74C24.91,83.1,24.94,83.11,25,83.08Z"
    transform="translate(-20.02 -73.62)"
  />
  <line class="cls-many-sheep-1" x1="9.69" y1="6.4" x2="9.61" y2="6.88" />
  <line class="cls-many-sheep-1" x1="11.5" y1="7.38" x2="11.7" y2="6.5" />
  <path
    class="cls-many-sheep-2"
    d="M32.3,79.87s.05-.81-.25-1.05a.14.14,0,0,1-.07-.1c0-.16-.18-.53-.52-.56l-.09,0a1.5,1.5,0,0,0-1.2-.32.22.22,0,0,1-.11,0c-.17,0-.69-.15-.83.28A.79.79,0,0,0,29,79a.2.2,0,0,1,0,.11c0,.15-.06.61.22.71a.31.31,0,0,1,.09.07,1.17,1.17,0,0,0,.85.51l.07,0a1.28,1.28,0,0,0,.78.08,0,0,0,0,1,0,0,1.34,1.34,0,0,0,1.05-.32C32.49,79.81,32.3,79.87,32.3,79.87Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M32.46,79.77a1.08,1.08,0,0,1,.25.39c.09.23.13.6,0,.69s-1-.44-.8-.92A.35.35,0,0,1,32.46,79.77Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M32.08,79.93c-.09-.14-.32-.44-.58-.36,0,0,0,0,0,0s.09.24.57.38A0,0,0,0,0,32.08,79.93Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="11.09"
    y1="7.65"
    x2="11.11"
    y2="6.72"
  />
  <path
    class="cls-many-sheep-1"
    d="M29.29,79.59a2.42,2.42,0,0,1-.25.91"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M32.33,80c.08-.14.25-.49.1-.74a0,0,0,0,0,0,0c-.06,0-.17.17-.12.73C32.28,80,32.31,80,32.33,80Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="19.11"
    y1="2.42"
    x2="19.04"
    y2="2.9"
  />
  <line
    class="cls-many-sheep-1"
    x1="20.93"
    y1="3.4"
    x2="21.13"
    y2="2.52"
  />
  <path
    class="cls-many-sheep-2"
    d="M41.73,75.89s.05-.81-.26-1a.21.21,0,0,1-.06-.1c0-.16-.18-.53-.53-.57a.11.11,0,0,1-.08,0,1.55,1.55,0,0,0-1.21-.31.2.2,0,0,1-.11,0c-.16,0-.68-.14-.83.29a.79.79,0,0,0-.21.94.34.34,0,0,1,0,.1c0,.16-.06.61.21.72a.2.2,0,0,1,.09.07,1.22,1.22,0,0,0,.86.51l.07,0a1.31,1.31,0,0,0,.78.07h0a1.31,1.31,0,0,0,1-.31C41.92,75.83,41.73,75.89,41.73,75.89Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M41.88,75.79a1,1,0,0,1,.26.39c.09.23.12.6,0,.69s-1-.44-.81-.92A.35.35,0,0,1,41.88,75.79Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M41.51,75.94c-.09-.14-.32-.43-.58-.36,0,0,0,0,0,0s.09.24.57.37C41.5,76,41.52,76,41.51,75.94Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="20.51"
    y1="3.67"
    x2="20.53"
    y2="2.74"
  />
  <path
    class="cls-many-sheep-1"
    d="M38.72,75.61a2.49,2.49,0,0,1-.26.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M41.75,76a.78.78,0,0,0,.1-.74s0,0,0,0-.17.18-.11.74A0,0,0,0,0,41.75,76Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="21.87"
    y1="6.53"
    x2="21.8"
    y2="7.01"
  />
  <line
    class="cls-many-sheep-1"
    x1="23.69"
    y1="7.5"
    x2="23.89"
    y2="6.63"
  />
  <path
    class="cls-many-sheep-2"
    d="M44.49,80s0-.81-.26-1.06a.17.17,0,0,1-.06-.1c-.05-.16-.18-.52-.53-.56a.11.11,0,0,1-.08,0,1.55,1.55,0,0,0-1.21-.32.14.14,0,0,1-.11,0c-.16,0-.68-.14-.83.29a.77.77,0,0,0-.21.93.41.41,0,0,1,0,.11c0,.15-.06.61.21.71a.23.23,0,0,1,.09.08,1.22,1.22,0,0,0,.86.51h.07a1.21,1.21,0,0,0,.78.08h0a1.33,1.33,0,0,0,1.05-.32C44.68,79.93,44.49,80,44.49,80Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M44.64,79.9a1.08,1.08,0,0,1,.26.38c.09.23.12.6,0,.69s-1-.43-.8-.92A.34.34,0,0,1,44.64,79.9Z"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M44.27,80.05c-.09-.14-.32-.44-.58-.36,0,0,0,0,0,0s.09.24.57.37A0,0,0,0,0,44.27,80.05Z"
    transform="translate(-20.02 -73.62)"
  />
  <line
    class="cls-many-sheep-1"
    x1="23.27"
    y1="7.77"
    x2="23.29"
    y2="6.85"
  />
  <path
    class="cls-many-sheep-1"
    d="M41.48,79.72a2.49,2.49,0,0,1-.26.9"
    transform="translate(-20.02 -73.62)"
  />
  <path
    class="cls-many-sheep-3"
    d="M44.51,80.09c.09-.15.25-.5.1-.74,0,0,0,0,0,0s-.17.17-.11.73C44.46,80.1,44.5,80.11,44.51,80.09Z"
    transform="translate(-20.02 -73.62)"
  />
</g>
`;

const oneRabbitPart = `
<g id="rabbit" transform="translate(18 40)" viewBox="0 0 2.55 1.71">
  <defs>
    <style>
      .cls-one-rabbit-1 {
        fill: #2c563e;
      }
      .cls-one-rabbit-2,
      .cls-one-rabbit-3,
      .cls-one-rabbit-4 {
        fill: #fff;
      }
      .cls-one-rabbit-2,
      .cls-one-rabbit-4 {
        stroke: #bcbec0;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
      .cls-one-rabbit-2 {
        stroke-width: 0.12px;
      }
      .cls-one-rabbit-4 {
        stroke-width: 0.08px;
      }
    </style>
  </defs>
  <ellipse
    class="cls-one-rabbit-1"
    cx="49.25"
    cy="83.97"
    rx="1.29"
    ry="0.33"
    transform="translate(-60.2 -74.15) rotate(-8.78)"
  />
  <circle class="cls-one-rabbit-2" cx="1.86" cy="0.56" r="0.31" />
  <path
    class="cls-one-rabbit-3"
    d="M48.08,83.91c-.14-.27.24-1,.91-1.06s1.07.46,1,.74C49.91,84.05,48.29,84.29,48.08,83.91Z"
    transform="translate(-47.97 -82.65)"
  />
  <path
    class="cls-one-rabbit-3"
    d="M48.42,82.65a.29.29,0,0,0-.2,0c-.22.19,0,.81.12.82s.4-.49.23-.75A.2.2,0,0,0,48.42,82.65Z"
    transform="translate(-47.97 -82.65)"
  />
  <path
    class="cls-one-rabbit-4"
    d="M48.56,83.53c.08-.33.23-.54.37-.53a.24.24,0,0,1,.16.15c0,.14-.08.35-.33.46"
    transform="translate(-47.97 -82.65)"
  />
</g>
`;

const twoRabbitPart = `
<g
  id="rabbit_many"
  transform="translate(16 40)"
  viewBox="0 0 5.64 1.99"
>
  <defs>
    <style>
      .cls-two-rabbit-1 {
        fill: #2c563e;
      }
      .cls-two-rabbit-2,
      .cls-two-rabbit-3,
      .cls-two-rabbit-4 {
        fill: #fff;
      }
      .cls-two-rabbit-2,
      .cls-two-rabbit-4 {
        stroke: #bcbec0;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
      .cls-two-rabbit-2 {
        stroke-width: 0.12px;
      }
      .cls-two-rabbit-4 {
        stroke-width: 0.08px;
      }
    </style>
  </defs>
  <ellipse
    class="cls-two-rabbit-1"
    cx="33.02"
    cy="82.85"
    rx="1.29"
    ry="0.33"
    transform="translate(-40.91 -75.24) rotate(-8.78)"
  />
  <ellipse
    class="cls-two-rabbit-1"
    cx="30.44"
    cy="82.29"
    rx="1.29"
    ry="0.33"
    transform="translate(-32.64 -79.65) rotate(-2.8)"
  />
  <circle class="cls-two-rabbit-2" cx="4.5" cy="0.94" r="0.31" />
  <path
    class="cls-two-rabbit-3"
    d="M31.4,82.89c-.14-.26.24-1,.91-1.06s1.08.46,1,.74C33.23,83,31.61,83.28,31.4,82.89Z"
    transform="translate(-28.65 -81.24)"
  />
  <path
    class="cls-two-rabbit-3"
    d="M31.74,81.63a.25.25,0,0,0-.19,0c-.23.19,0,.81.11.83s.41-.5.23-.76A.23.23,0,0,0,31.74,81.63Z"
    transform="translate(-28.65 -81.24)"
  />
  <path
    class="cls-two-rabbit-4"
    d="M31.88,82.52c.08-.34.24-.55.37-.54a.22.22,0,0,1,.16.15c.05.14-.07.35-.33.46"
    transform="translate(-28.65 -81.24)"
  />
  <ellipse class="cls-two-rabbit-2" cx="0.39" cy="0.56" rx="0.33" ry="0.31" />
  <path
    class="cls-two-rabbit-3"
    d="M30.9,82.5c.15-.26-.26-1-1-1.06s-1.14.47-1.08.75C29,82.64,30.68,82.89,30.9,82.5Z"
    transform="translate(-28.65 -81.24)"
  />
  <path
    class="cls-two-rabbit-3"
    d="M30.54,81.25a.28.28,0,0,1,.2,0c.24.19.05.82-.12.83s-.43-.49-.25-.76A.24.24,0,0,1,30.54,81.25Z"
    transform="translate(-28.65 -81.24)"
  />
  <path
    class="cls-two-rabbit-4"
    d="M30.39,82.13c-.09-.34-.25-.54-.39-.53a.19.19,0,0,0-.17.14c0,.14.08.35.35.47"
    transform="translate(-28.65 -81.24)"
  />
</g>
`;

function getDogPart(factors) {
  const dogLightColor = dogLightColors[factors[17] % dogLightColors.length];
  const dogDarkColor = dogDarkColors[factors[17] % dogDarkColors.length];
  return `
  <g id="dog" transform="translate(33 34)" viewBox="0 0 4.03 3.34">
    <defs>
      <style>
        .cls-dog-1 {
          fill: #2c563e;
        }
        .cls-dog-2,
        .cls-dog-3,
        .cls-dog-6,
        .cls-dog-7 {
          stroke-linecap: round;
        }
        .cls-dog-2,
        .cls-dog-3,
        .cls-dog-6 {
          stroke-linejoin: round;
          stroke-width: 0.3px;
        }
        .cls-dog-3,
        .cls-dog-6,
        .cls-dog-7 {
          fill: none;
        }
        .cls-dog-7 {
          stroke-miterlimit: 10;
          stroke-width: 0.12px;
        }
      </style>
    </defs>
    <ellipse class="cls-dog-1" cx="1.96" cy="3.02" rx="1.96" ry="0.32" />
    <path
      class="cls-dog-2"
      style="fill: ${dogDarkColor};stroke: ${dogDarkColor};"
      d="M47.83,78.66a1.9,1.9,0,0,1-.35-1"
      transform="translate(-45.04 -75.81)"
    />
    <path
      class="cls-dog-3"
      style="stroke: ${dogDarkColor};"
      d="M45.32,77.78a2.93,2.93,0,0,1,.78-.3"
      transform="translate(-45.04 -75.81)"
    />
    <path
      style="fill: ${dogLightColor};"
      d="M46.27,75.81c-.45,0-.39.47-.56.48-.37,0-.59,0-.62.25s.45.55.71.49c0,0-.42,1.2,1.29,1.22,1.42,0,1.26-.58,1.26-.58s.09-.58-1.56-.53C46.79,77.14,47.52,75.81,46.27,75.81Z"
      transform="translate(-45.04 -75.81)"
    />
    <path
      class="cls-dog-5"
      style="fill: ${dogDarkColor};"
      d="M46.31,75.9c-.35.09.2,1.44.51,1.28a1,1,0,0,0,.38-.88C47.21,75.86,46.54,75.84,46.31,75.9Z"
      transform="translate(-45.04 -75.81)"
    />
    <line class="cls-dog-6" style="stroke: ${dogLightColor};" x1="0.79" y1="2.68" x2="1.32" y2="1.82" />
    <path
      class="cls-dog-6"
      style="stroke: ${dogLightColor};"
      d="M48.53,78.55a2,2,0,0,1-.7-.88"
      transform="translate(-45.04 -75.81)"
    />
    <path
      class="cls-dog-7"
      style="stroke: ${dogLightColor};"
      d="M48.3,77.88s.61,0,.7-.29a.45.45,0,0,0,0-.23"
      transform="translate(-45.04 -75.81)"
    />
  </g>
  `;
}

function getFlowersPart(isPro, factors) {
  let color;
  if (isPro) {
    color = flowersColors[factors[1] % flowersColors.length];
  } else {
    color = '';
  }
  return `
  <g id="FLOWERS" transform="translate(7 35)" viewBox="0 0 34.53 13.85">
  <defs>
    <style>
      .cls-flowers-1 {
        stroke-miterlimit: 10;
        stroke-width: 0.25px;
      }
    </style>
  </defs>
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M19.62,82.16c0,.08-.13.14-.28.14s-.1.15-.22.15-.21-.07-.21-.15c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14S19.62,82.08,19.62,82.16Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M29.29,79.22c0,.08-.13.14-.28.14s-.1.15-.22.15-.21-.07-.21-.15c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14S29.29,79.14,29.29,79.22Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M20.83,78.63c0,.08-.13.15-.28.15s-.1.14-.22.14-.21-.06-.21-.14c-.16,0-.29-.07-.29-.15s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14S20.83,78.55,20.83,78.63Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M26.86,81.39c0,.08-.13.14-.29.14,0,.08-.09.15-.21.15s-.22-.07-.22-.15c-.15,0-.28-.06-.28-.14s.13-.14.28-.14c0-.08.1-.15.22-.15s.21.07.21.15C26.73,81.25,26.86,81.31,26.86,81.39Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M27.92,82.45c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14-.28-.06-.28-.14.13-.15.28-.15.1-.14.22-.14.21.07.21.14C27.79,82.3,27.92,82.37,27.92,82.45Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M31.6,83.23c0,.08-.14.14-.29.14,0,.08-.1.15-.22.15s-.21-.07-.21-.15c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14C31.46,83.09,31.6,83.15,31.6,83.23Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M32.65,84.58c0,.08-.13.14-.29.14,0,.08-.1.14-.22.14s-.21-.06-.21-.14c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.15.21-.15s.22.07.22.15C32.52,84.44,32.65,84.5,32.65,84.58Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M29.79,85.43c0,.08-.13.15-.29.15,0,.07-.1.14-.22.14s-.21-.07-.21-.14c-.16,0-.28-.07-.28-.15s.12-.14.28-.14c0-.08.09-.14.21-.14s.22.06.22.14C29.66,85.29,29.79,85.35,29.79,85.43Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M26.27,85.43c0,.08-.13.15-.29.15,0,.07-.09.14-.21.14s-.22-.07-.22-.14c-.15,0-.28-.07-.28-.15s.13-.14.28-.14c0-.08.1-.14.22-.14s.21.06.21.14C26.14,85.29,26.27,85.35,26.27,85.43Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M27.12,86.91c0,.08-.13.15-.28.15s-.1.14-.22.14-.21-.07-.21-.14c-.16,0-.29-.07-.29-.15s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14S27.12,86.83,27.12,86.91Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M23,88.33c0,.07-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14c-.15,0-.28-.07-.28-.14s.13-.15.28-.15c0-.08.1-.14.22-.14s.21.06.21.14C22.82,88.18,23,88.25,23,88.33Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M21.21,85.93c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14c-.16,0-.28-.06-.28-.14s.12-.15.28-.15c0-.08.1-.14.22-.14s.21.06.21.14C21.08,85.78,21.21,85.85,21.21,85.93Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M28.24,76.32c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14-.28-.06-.28-.14.13-.14.28-.14.1-.15.22-.15.21.07.21.15C28.11,76.18,28.24,76.24,28.24,76.32Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M25.74,78.21c0,.08-.13.15-.29.15,0,.07-.09.14-.21.14s-.21-.07-.21-.14c-.16,0-.29-.07-.29-.15s.13-.14.29-.14c0-.08.09-.14.21-.14s.21.06.21.14C25.61,78.07,25.74,78.13,25.74,78.21Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M38.41,79.52c0,.08-.14.14-.29.14,0,.08-.1.14-.22.14s-.21-.06-.21-.14c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.15.21-.15s.22.07.22.15C38.27,79.38,38.41,79.44,38.41,79.52Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M34.25,79.36c0,.07-.13.14-.28.14s-.1.14-.22.14-.21-.06-.21-.14c-.16,0-.29-.07-.29-.14s.13-.15.29-.15c0-.08.09-.14.21-.14s.22.06.22.14S34.25,79.28,34.25,79.36Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M31.59,76.73c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14c-.16,0-.28-.06-.28-.14s.12-.15.28-.15c0-.08.1-.14.22-.14s.21.06.21.14C31.46,76.58,31.59,76.65,31.59,76.73Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M45.23,76.59c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14-.28-.06-.28-.14.13-.14.28-.14.1-.15.22-.15.21.07.21.15C45.1,76.45,45.23,76.51,45.23,76.59Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M43.19,77.55c0,.08-.13.14-.29.14,0,.08-.1.15-.22.15s-.21-.07-.21-.15c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14C43.06,77.41,43.19,77.47,43.19,77.55Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M50.34,78.78c0,.08-.13.15-.28.15s-.1.14-.22.14-.21-.06-.21-.14c-.16,0-.29-.07-.29-.15s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14S50.34,78.71,50.34,78.78Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M48.6,80.38c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14c-.15,0-.28-.06-.28-.14s.13-.14.28-.14c0-.08.1-.15.22-.15s.21.07.21.15C48.47,80.24,48.6,80.3,48.6,80.38Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M50.8,81.52c0,.08-.14.14-.29.14s-.1.15-.22.15-.21-.07-.21-.15c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14S50.8,81.44,50.8,81.52Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M42.83,84.05c0,.08-.14.14-.29.14s-.1.14-.22.14-.21-.06-.21-.14c-.16,0-.29-.06-.29-.14s.13-.15.29-.15c0-.07.09-.14.21-.14s.22.07.22.14S42.83,84,42.83,84.05Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M52.91,85.76c0,.08-.14.14-.29.14,0,.08-.1.15-.22.15s-.21-.07-.21-.15c-.16,0-.29-.06-.29-.14s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14C52.77,85.62,52.91,85.68,52.91,85.76Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M47.36,87.62c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14-.28-.06-.28-.14.13-.14.28-.14.1-.15.22-.15.21.07.21.15C47.23,87.48,47.36,87.54,47.36,87.62Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M46.47,89.34c0,.08-.13.15-.29.15,0,.08-.09.14-.21.14s-.21-.06-.21-.14c-.16,0-.29-.07-.29-.15s.13-.14.29-.14c0-.08.09-.14.21-.14s.21.06.21.14C46.34,89.2,46.47,89.27,46.47,89.34Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M47.94,88.77c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14c-.16,0-.28-.06-.28-.14s.12-.14.28-.14c0-.08.1-.15.22-.15s.21.07.21.15C47.81,88.63,47.94,88.69,47.94,88.77Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M38.41,88.23c0,.08-.14.14-.29.14,0,.08-.1.14-.22.14s-.21-.06-.21-.14c-.16,0-.29-.06-.29-.14s.13-.15.29-.15c0-.07.09-.14.21-.14s.22.07.22.14C38.27,88.08,38.41,88.15,38.41,88.23Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M39.52,86.54c0,.08-.13.15-.29.15,0,.07-.1.14-.22.14s-.21-.07-.21-.14c-.16,0-.28-.07-.28-.15s.12-.14.28-.14c0-.08.09-.14.21-.14s.22.06.22.14C39.39,86.4,39.52,86.46,39.52,86.54Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M35.94,84.29c0,.08-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14c-.16,0-.28-.06-.28-.14s.12-.15.28-.15c0-.07.1-.14.22-.14s.21.07.21.14C35.81,84.14,35.94,84.21,35.94,84.29Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M38.53,82.93c0,.08-.14.15-.29.15s-.1.14-.22.14-.21-.06-.21-.14c-.16,0-.29-.07-.29-.15s.13-.14.29-.14c0-.08.09-.14.21-.14s.22.06.22.14S38.53,82.86,38.53,82.93Z"
    transform="translate(-18.5 -75.91)"
  />
  <path
    class="cls-flowers-1"
    style="fill: ${color};stroke: ${color};"
    d="M41.11,81.81c0,.07-.13.14-.29.14,0,.08-.09.14-.21.14s-.22-.06-.22-.14c-.16,0-.28-.07-.28-.14s.12-.15.28-.15c0-.08.1-.14.22-.14s.21.06.21.14C41,81.66,41.11,81.73,41.11,81.81Z"
    transform="translate(-18.5 -75.91)"
  />
</g>
  `;
}

function getWomenPart(isPro, factors) {
  let womanDressColor;
  if (isPro) {
    womanDressColor = womanDressColors[factors[3] % womanDressColors.length];
  } else {
    womanDressColor = '';
  }
  let skinColor;
  if (isPro) {
    skinColor = skinColors[factors[4] % skinColors.length];
  } else {
    skinColor = '';
  }
  let hairColor;
  if (isPro) {
    hairColor = hairColors[factors[5] % hairColors.length];
  } else {
    hairColor = '';
  }
  return `
  <g id="woman" transform="translate(32 40)" viewBox="0 0 6.35 4.9">
    <defs>
      <style>
        .cls-women-1 {
          fill: #2c563e;
        }
        .cls-women-2 {
          stroke-width: 0.75px;
        }
        .cls-women-2,
        .cls-women-6,
        .cls-women-8 {
          stroke-linecap: round;
          stroke-miterlimit: 10;
        }
        .cls-women-3 {
          fill: #2e3d45;
        }
        .cls-women-6,
        .cls-women-8 {
          fill: none;
        }
        .cls-women-6 {
          stroke-width: 0.36px;
        }
        .cls-women-8 {
          stroke: #fbb040;
          stroke-width: 0.1px;
        }
      </style>
    </defs>
    <path
      class="cls-women-1"
      d="M49,86a2.14,2.14,0,0,1-.46.34l-1-.66-.12.11.86.8s1.28-.37-.1.38l-1.18-.76a.83.83,0,0,1-.16.12.34.34,0,0,1-.37,0L44.83,84.8a3,3,0,0,1,.5.91.18.18,0,1,1-.36.06,3.56,3.56,0,0,0-.56-.93c-.26-.36-.52-.66-.52-.66V84h0a1,1,0,0,1-.87-.54l0,0a1,1,0,0,1,.17-1.07.3.3,0,0,1,.43,0s0,0,0,0l0,0a.37.37,0,0,1,.52.1.39.39,0,0,0,.19.15l.12,0h0a.38.38,0,0,1,.4.34.36.36,0,0,1-.13.31h.08v0l.25-.06a10.21,10.21,0,0,0,1.73.91.18.18,0,0,1,.12.23.1.1,0,0,1,0,0l1.11.52c.18.08.33.45.13.48l-.18,0,.61.53S49.62,85.45,49,86Z"
      transform="translate(-42.91 -82.05)"
    />
    <path
      class="cls-women-2"
      style="fill: ${hairColor};stroke: ${hairColor};"
      d="M43.93,82.43a.73.73,0,0,0,.38.29.62.62,0,0,0,.31,0"
      transform="translate(-42.91 -82.05)"
    />
    <path
      class="cls-women-3"
      d="M45.76,85.19s.68-1,1.16-1l1.75,1.53s1-.48.37.06c-.39.33-.46.34-.46.34l-1.86-1.21,1.58,1.45s1.29-.36-.09.39Z"
      transform="translate(-42.91 -82.05)"
    />
    <ellipse
      style="fill: ${skinColor};"
      cx="43.99"
      cy="82.78"
      rx="0.46"
      ry="0.64"
      transform="translate(-81.17 -44.25) rotate(-33.34)"
    />
    <path
      class="cls-women-5"
      style="fill: ${hairColor};"
      d="M43.24,82.15a1,1,0,0,0-.16,1.08h0v0a1,1,0,0,0,.88.54.31.31,0,0,0,.31-.29.3.3,0,0,0-.3-.31.41.41,0,0,1-.35-.21v0h0a.4.4,0,0,1,.06-.43.29.29,0,0,0,0-.42.31.31,0,0,0-.43,0Z"
      transform="translate(-42.91 -82.05)"
    />
    <path
      class="cls-women-6"
      style="stroke: ${skinColor};"
      d="M45.09,83.12a10.36,10.36,0,0,0,1.77.92"
      transform="translate(-42.91 -82.05)"
    />
    <path
      style="fill: ${womanDressColor};"
      d="M44.09,83.85l2.4,2.22a.34.34,0,0,0,.37.05c.35-.2.65-.85,1.37-1,.2,0,.06-.4-.12-.48l-2.18-1,0,0L45,83.06S44.23,82.85,44.09,83.85Z"
      transform="translate(-42.91 -82.05)"
    />
    <path
      class="cls-women-6"
      style="stroke: ${skinColor};"
      d="M45.23,85.55a7.06,7.06,0,0,0-1.12-1.68"
      transform="translate(-42.91 -82.05)"
    />
    <path
      class="cls-women-8"
      d="M45.09,84.5a1.17,1.17,0,0,1,.75-.74"
      transform="translate(-42.91 -82.05)"
    />
  </g>
  `;
}

function getManPart(isPro, factors) {
  let manShirtColor;
  if (isPro) {
    manShirtColor = manShirtColors[factors[2] % manShirtColors.length];
  } else {
    manShirtColor = '';
  }
  let skinColor;
  if (isPro) {
    skinColor = skinColors[factors[4] % skinColors.length];
  } else {
    skinColor = '';
  }
  let hairColor;
  if (isPro) {
    hairColor = hairColors[factors[5] % hairColors.length];
  } else {
    hairColor = '';
  }
  return `
  <g id="man" transform="translate(28 40)" viewBox="0 0 6.5 6.01">
  <defs>
    <style>
      .cls-man-1 {
        fill: #2c563e;
      }
      .cls-man-4,
      .cls-man-5 {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .cls-man-4 {
        stroke-width: 0.36px;
      }
      .cls-man-5 {
        stroke-width: 0.36px;
      }
      .cls-man-6 {
        fill: #2e3d45;
      }
    </style>
  </defs>
  <path
    class="cls-man-1"
    d="M45.14,87.25l-2-2.13-.46-.42.25-.1.12-.14L43,84.29l-.12-.09s0,0,0-.06c-.05-.32-.64-.48-.64-.48a2.65,2.65,0,0,0-1.08-.15,1.61,1.61,0,0,0-.39.12.76.76,0,0,0-.13-.42.84.84,0,0,0-.36-.3.17.17,0,0,0,0-.12.27.27,0,0,0-.32-.13.77.77,0,0,0-.53.67v0a.75.75,0,0,0,.44.67.24.24,0,0,0,.28,0l.08,0A1.51,1.51,0,0,0,40,85.58l0,.1c.14.33.33.38.51.32l.08.1.23,0,.44-.26.31.33,2.81,2.25c1.8-.73.17-.46.17-.46l-1.77-2L45,87.73a2.69,2.69,0,0,0,.62-.35C46.48,86.8,45.14,87.25,45.14,87.25Z"
    transform="translate(-39.47 -82.44)"
  />
  <path
    style="fill: ${hairColor};"
    d="M40.07,82.46a.76.76,0,0,0-.53.66h0v0a.75.75,0,0,0,.44.66.27.27,0,0,0,.34-.09.22.22,0,0,0-.1-.31.3.3,0,0,1-.18-.26v0h0a.31.31,0,0,1,.21-.26.23.23,0,0,0,.14-.3.25.25,0,0,0-.32-.12Z"
    transform="translate(-39.47 -82.44)"
  />
  <ellipse
    style="fill: ${skinColor};"
    cx="40.36"
    cy="83.26"
    rx="0.46"
    ry="0.64"
    transform="translate(-78.59 -46.55) rotate(-33.34)"
  />
  <path
    style="fill: ${manShirtColor};"
    d="M40.09,85.37a1.49,1.49,0,0,1,1.18-2.06,2.46,2.46,0,0,1,1.08.14s.59.16.64.49a.72.72,0,0,1-.19.55l.46.42L41.7,86l-.56-.58s-.66.88-1,.06A.69.69,0,0,1,40.09,85.37Z"
    transform="translate(-39.47 -82.44)"
  />
  <polyline class="cls-man-4" style="stroke: ${skinColor};" points="2.75 2.53 1.39 3.32 1.06 2.99" />
  <path
    class="cls-man-5"
    style="stroke: ${skinColor};"
    d="M42.62,83.92s.37.31.37.31l-1.14.45"
    transform="translate(-39.47 -82.44)"
  />
  <path
    class="cls-man-6"
    d="M41.7,86s1-1.16,1.56-1.08l2,2.13s1.34-.45.46.13a2.27,2.27,0,0,1-.61.35l-2.15-1.74,1.77,2s1.63-.28-.17.45Z"
    transform="translate(-39.47 -82.44)"
  />
</g>
  `;
}

const boyShirtColors = ['#e7685d', '#5085b6', '#191e27'];
const boySkinColors = ['#fcccac', '#d18855', '#8d5228'];
const boyHairColors = ['#191e27', '#663c27', '#f4e0be'];

function getBoyPart(isPro, factors) {
  // factor-12
  const boyShirtColor = boyShirtColors[factors[12] % boyShirtColors.length];
  // factor-13
  const boySkinColor = boySkinColors[factors[13] % boySkinColors.length];
  // factor-14
  const boyHairColor = boyHairColors[factors[14] % boyHairColors.length];
  return `
  <g id="boy" transform="translate(22 24)" viewBox="0 0 9.72 12.6">
    <defs>
      <style>
        .cls-boy-1,
        .cls-boy-10,
        .cls-boy-11,
        .cls-boy-3,
        .cls-boy-6,
        .cls-boy-8 {
          fill: none;
          stroke-linecap: round;
          stroke-miterlimit: 10;
        }
        .cls-boy-1 {
          stroke: #e6e7e8;
        }
        .cls-boy-1,
        .cls-boy-10,
        .cls-boy-11 {
          stroke-width: 0.1px;
        }
        .cls-boy-2 {
          fill: #2c563e;
        }
        .cls-boy-3,
        .cls-boy-8 {
          stroke-width: 0.25px;
        }
        .cls-boy-4 {
          fill: #2e3d45;
        }
        .cls-boy-6 {
          stroke-width: 0.3px;
        }
        .cls-boy-8 {
          stroke: #2e3d45;
        }
        .cls-boy-9 {
          fill: #f68c57;
        }
        .cls-boy-10 {
          stroke: #1c75bc;
        }
        .cls-boy-11 {
          stroke: #e7685d;
        }
      </style>
    </defs>
    <path
      class="cls-boy-1"
      d="M35.72,74.4c-.19,0-.23-.1-.21-.19s.08,0,.2-.22a47.9,47.9,0,0,0,2.56-7.79"
      transform="translate(-33.36 -65.54)"
    />
    <ellipse class="cls-boy-2" cx="2.1" cy="12.23" rx="1.13" ry="0.38" />
    <path
      class="cls-boy-3"
      style="stroke: ${boySkinColor};"
      d="M35.4,76.44a.86.86,0,0,0,.82,0"
      transform="translate(-33.36 -65.54)"
    />
    <line class="cls-boy-3" style="stroke: ${boySkinColor};" x1="1.47" y1="12.13" x2="1.56" y2="11.16" />
    <polygon
      class="cls-boy-4"
      points="1.22 10.78 1.37 11.42 1.83 11.25 1.83 11.15 2.03 11.16 2.28 10.7 1.77 10.38 1.22 10.78"
    />
    <path
      class="cls-boy-3"
      style="stroke: ${boySkinColor};"
      d="M33.49,76.24a.54.54,0,0,0,.41-.2A.53.53,0,0,0,34,75.7"
      transform="translate(-33.36 -65.54)"
    />
    <path
      class="cls-boy-3"
      style="stroke: ${boySkinColor};"
      d="M35.14,75.05a4.06,4.06,0,0,0,.45-.75"
      transform="translate(-33.36 -65.54)"
    />
    <circle style="fill: ${boySkinColor};" cx="0.83" cy="9.22" r="0.46" />
    <path
      class="cls-boy-6"
      style="stroke: ${boyHairColor};"
      d="M33.89,74.36a.59.59,0,0,0-.12.65"
      transform="translate(-33.36 -65.54)"
    />
    <path
      style="fill: ${boyShirtColor};"
      d="M33.89,75.66a.63.63,0,0,1,.55-.55c.52-.09.57-.35.57-.35l.34.42-.25.24.29.54s-.57.47-.92.46l-.26-.52-.07.07Z"
      transform="translate(-33.36 -65.54)"
    />
    <line class="cls-boy-8" x1="1.18" y1="12.23" x2="1.47" y2="12.16" />
    <line class="cls-boy-8" x1="3.23" y1="11.07" x2="2.88" y2="10.82" />
    <polygon
      class="cls-boy-9"
      points="3.98 0.31 4.62 1.33 6.73 1.33 5.16 0 3.98 0.31"
    />
    <path
      class="cls-boy-10"
      d="M43,66.37a1.56,1.56,0,0,1-.31.44,1.06,1.06,0,0,1-1.08.3c-.43-.12-.77-.52-1.1-.52a.72.72,0,0,0-.5.26"
      transform="translate(-33.36 -65.54)"
    />
    <line class="cls-boy-11" x1="4.15" y1="0.37" x2="6.68" y2="1.31" />
    <line class="cls-boy-11" x1="5.13" y1="0.08" x2="4.66" y2="1.26" />
  </g>
  `;
}

function getBadgeBorderPart(name) {
  return `
  <g>
    <defs>
      <style>
        .cls-1 {
          fill: #e6e7e8;
        }
        .cls-2 {
          fill: #f4eeed;
        }
        .cls-3 {
          font-size: 3.3px;
          fill: #8f6c56;
          font-family: Arial-Black, Arial Black;
          font-weight: 800;
        }
        .cls-4 {
          letter-spacing: -0.03em;
        }
        .cls-5 {
          font-family: ArialMT, Arial;
          font-weight: 400;
        }
        .cls-6 {
          fill: #191e27;
        }
        .cls-7 {
          fill: #f58e90;
        }
        .cls-8 {
          font-size: 1.5px;
          fill: #231f20;
          font-family: DINCondensed-Bold, DIN Condensed;
          font-weight: 700;
        }
      </style>
    </defs>
    <path
      class="cls-1"
      d="M60.14,44V42.93a1.53,1.53,0,0,1-1.06-.44,1.56,1.56,0,0,1-.44-1.06h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,1,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-1.5,1.5V44a1.5,1.5,0,0,1,0,3V48.1a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.08a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.08a1.5,1.5,0,0,1,0,3V80.8a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3V89a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.08a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.1a1.53,1.53,0,0,1,1.06.44,1.52,1.52,0,0,1,.44,1h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,1,1,3,0h1a1.5,1.5,0,1,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.52,1.52,0,0,1,.44-1,1.53,1.53,0,0,1,1.06-.44v-1.1a1.5,1.5,0,0,1,0-3v-1.08a1.5,1.5,0,0,1,0-3V96.07a1.5,1.5,0,1,1,0-3V92a1.5,1.5,0,0,1,0-3V87.89a1.5,1.5,0,0,1,0-3V83.8a1.5,1.5,0,0,1,0-3V79.71a1.5,1.5,0,0,1,0-3V75.63a1.5,1.5,0,1,1,0-3V71.54a1.5,1.5,0,0,1,0-3V67.45a1.5,1.5,0,0,1,0-3V63.36a1.5,1.5,0,0,1,0-3V59.27a1.5,1.5,0,0,1,0-3V55.19a1.5,1.5,0,0,1,0-3V51.1a1.5,1.5,0,0,1,0-3V47a1.5,1.5,0,0,1,0-3Zm-6.27,46.9H18.12V48.47H53.87Z"
      transform="translate(-11.64 -41.27)"
    />
    <path
      class="cls-2"
      d="M59.93,43.86V42.78a1.5,1.5,0,0,1-1.06-.44,1.52,1.52,0,0,1-.44-1.06h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,1,1-3,0h-1a1.5,1.5,0,1,1-3,0h-1a1.5,1.5,0,1,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-3,0h-1a1.5,1.5,0,0,1-.44,1.06,1.52,1.52,0,0,1-1.06.44v1.09a1.5,1.5,0,0,1,0,3V48a1.5,1.5,0,0,1,0,3V52a1.5,1.5,0,1,1,0,3v1.08a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3V64.3a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.08a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3V97a1.5,1.5,0,0,1,0,3v1.09a1.5,1.5,0,0,1,0,3v1.1a1.52,1.52,0,0,1,1.06.44,1.48,1.48,0,0,1,.44,1.05h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,1,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.5,1.5,0,0,1,3,0h1a1.48,1.48,0,0,1,.44-1.05,1.5,1.5,0,0,1,1.06-.44v-1.1a1.5,1.5,0,0,1,0-3V100a1.5,1.5,0,1,1,0-3V95.92a1.5,1.5,0,1,1,0-3V91.83a1.5,1.5,0,1,1,0-3V87.74a1.5,1.5,0,1,1,0-3V83.65a1.5,1.5,0,0,1,0-3V79.56a1.5,1.5,0,0,1,0-3V75.48a1.5,1.5,0,1,1,0-3V71.39a1.5,1.5,0,1,1,0-3V67.3a1.5,1.5,0,1,1,0-3V63.21a1.5,1.5,0,0,1,0-3V59.12a1.5,1.5,0,0,1,0-3V55a1.5,1.5,0,0,1,0-3V51a1.5,1.5,0,1,1,0-3V46.86a1.5,1.5,0,1,1,0-3Zm-6.27,46.9H17.91V48.32H53.66Z"
      transform="translate(-11.64 -41.27)"
    />
    <text class="cls-3" transform="translate(6.27 55.78)">
      DEVCON | 2020
    </text>
    <path
      class="cls-6"
      d="M49.93,93.25l-2.29,1.32v2.65l2.29,1.33,2.3-1.33V94.57Zm-.1,2.46-.3-.17.3-.52Zm-.11.19-.6.34.3-.52Zm.11.18V97l-.78-.45Zm.21,0,.78.45L50,97Zm.1-.18.3-.18.3.52Zm-.1-.19V95l.3.52Zm0-1.11v-1l1.87,1.08-1.39.81Zm-.21,0-.48.84L48,94.63l1.88-1.08Zm-.59,1-.48.83-.91.53V94.81Zm-.4,1,1,.57v1L48,97.16Zm1.2.57,1-.57.88.51L50,98.24Zm1.06-.77-.48-.83,1.4-.81V97Z"
      transform="translate(-10.3 -41.27)"
    />
    <polygon
      class="cls-7"
      points="7.92 51.09 7.04 51.09 7.48 50.21 7.92 51.09"
    />
    <path
      class="cls-7"
      d="M21.77,91.48v1.76h-3.1a.27.27,0,0,1-.24-.39l.17-.34h1l.35.72V91.48l.88.88Z"
      transform="translate(-11.64 -41.27)"
    />
    <text class="cls-8" transform="translate(6.48 58.24)">
      ${name}
    </text>
  </g>
  `;
}

const cloudParts = [cloudOnePart, cloudTwoPart, cloudOnePart + cloudTwoPart];
const birdParts = [birdTwoPart, birdThreePart, birdTwoPart + birdThreePart];
const farawayParts = [farawayGroundPart, farawayWallPart];
const moonAndSun = [moonPart, sunPart];
const sheepParts = [oneSheepPart, lessSheepPart, manySheepPart];
const rabbitParts = [oneRabbitPart, twoRabbitPart, ''];

function getBadge(isPro, data, userDid, sessionID) {
  const factors = getFactors(userDid, sessionID);
  // factor-6
  let cloud;
  // factor-7
  let bird;
  // factor-8
  let faraway;
  // factor-9
  let moonOrSun;
  // factor-15
  let sheep;
  // factor-16
  let rabbit;
  // factor-18
  let dog;
  const women = getWomenPart(isPro, factors);
  const man = getManPart(isPro, factors);
  const boy = getBoyPart(isPro, factors);
  const persons = [women, man, boy, women + man, women + boy, man + boy, women + man + boy];
  // factor-10
  let personPart;
  const flowers = [getFlowersPart(isPro, factors)];
  // factor-11
  let flowerPart;
  const dogs = [getDogPart(factors), ''];

  if (!isPro) {
    cloud = '';
    bird = '';
    faraway = farawayGroundPart;
    moonOrSun = '';
    personPart = '';
    flowerPart = '';
    sheep = '';
    rabbit = '';
    dog = '';
  } else {
    cloud = cloudParts[factors[6] % cloudParts.length];
    bird = birdParts[factors[7] % birdParts.length];
    faraway = farawayParts[factors[8] % farawayParts.length];
    moonOrSun = moonAndSun[factors[9] % moonAndSun.length];
    personPart = persons[factors[10] % persons.length];
    flowerPart = flowers[factors[11] % flowers.length];
    sheep = sheepParts[factors[15] % sheepParts.length];
    rabbit = rabbitParts[factors[16] % rabbitParts.length];
    dog = dogs[factors[18] % dogs.length];
  }

  return `
  <svg id="frame" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.5 65.56">
    <!-- bg -->
    ${getBgPart(isPro, factors)}
    <!-- cloud -->
    ${cloud}
    <!-- moon or sun -->
    ${moonOrSun}
    <!-- bird -->
    ${bird}
    <!-- faraway -->
    ${faraway}
    <!-- ground -->
    ${groundPart}
    <!-- flowers -->
    ${flowerPart}
    <!-- dog -->
    ${dog}
    <!-- sheep -->
    ${sheep}
    <!-- rabbit -->
    ${rabbit}
    <!-- person -->
    ${personPart}
    <!-- badge bg -->
    ${getBadgeBorderPart(data.name)}
  </svg>
  `;
}

module.exports = {
  getBadge,
};
