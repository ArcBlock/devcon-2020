/* eslint-disable max-len */
const ForgeSDK = require('@arcblock/forge-sdk');
const Mcrypto = require('@arcblock/mcrypto');
const { proCertBlueSvg } = require('./certs_template/pro_cert_blue');
const { proCertDarkRedSvg } = require('./certs_template/pro_cert_dark_red');
const { proCertGreySvg } = require('./certs_template/pro_cert_grey');
const { proCertOrangeSvg } = require('./certs_template/pro_cert_orange');
const { proCertPurpleSvg } = require('./certs_template/pro_cert_purple');
const { proCertRedSvg } = require('./certs_template/pro_cert_red');

function createFreeTicketSvg({ data }) {
  return `
  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2653.01 917.64"
    >
      <defs>
        <style>
          .free-ticket-cls-1 {
            fill: #f2f2f3;
          }
          .free-ticket-cls-2 {
            fill: #f3a241;
          }
          .free-ticket-cls-3 {
            fill: url(#New_Gradient_Swatch_1);
          }
          .free-ticket-cls-4 {
            fill: url(#linear-gradient);
          }
          .free-ticket-cls-5 {
            fill: url(#linear-gradient-2);
          }
          .free-ticket-cls-6 {
            fill: url(#linear-gradient-3);
          }
          .free-ticket-cls-7 {
            fill: url(#New_Gradient_Swatch_2);
          }
          .free-ticket-cls-8 {
            fill: url(#linear-gradient-4);
          }
          .free-ticket-cls-9 {
            fill: #3cbeb3;
          }
          .free-ticket-cls-10 {
            fill: url(#linear-gradient-5);
          }
          .free-ticket-cls-11 {
            fill: #fff;
          }
        </style>
        <linearGradient
          id="New_Gradient_Swatch_1"
          x1="349.51"
          y1="56.17"
          x2="-132.02"
          y2="519.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f2f2f3" />
          <stop offset="0.44" stop-color="#f3a241" />
        </linearGradient>
        <linearGradient
          id="linear-gradient"
          x1="620.69"
          y1="222.68"
          x2="-465.65"
          y2="553.88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f2f2f3" />
          <stop offset="0.53" stop-color="#f3a241" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="2022.83"
          y1="512.25"
          x2="2493.99"
          y2="240.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3a241" />
          <stop offset="0.87" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="1805.14"
          y1="667.26"
          x2="2085.99"
          y2="667.26"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3a241" />
          <stop offset="0.91" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="New_Gradient_Swatch_2"
          x1="1581.5"
          y1="901.27"
          x2="1888.95"
          y2="829.14"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f2f2f3" />
          <stop offset="0.44" stop-color="#f3a241" />
          <stop offset="0.91" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="2618.12"
          y1="-95.23"
          x2="1589.03"
          y2="814.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.47" stop-color="#3cbeb3" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="2238.44"
          y1="-49.84"
          x2="726.26"
          y2="1373.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stop-color="#3cbeb3" />
          <stop offset="0.9" stop-color="#f2f2f3" />
        </linearGradient>
      </defs>
      <g id="Layer_3" data-name="Layer 3">
        <path
          class="free-ticket-cls-1"
          d="M2564.58,21c-3.76-.34-7.56-.52-11.41-.52H1998.28a111.51,111.51,0,1,1-223,0H147.84A123.85,123.85,0,0,0,24,144.31v670A123.84,123.84,0,0,0,147.84,938.11H1775.27a111.38,111.38,0,0,1,111.5-111.5c1.3,0,2.59,0,3.87.08a111.49,111.49,0,0,1,107.64,111.42h554.89A123.83,123.83,0,0,0,2677,814.27v-670A123.86,123.86,0,0,0,2564.58,21ZM1921.76,693.71a35,35,0,1,1-6.57-20.41A35,35,0,0,1,1921.76,693.71Zm-70-286.13a35,35,0,1,1,1.91,11.43A35,35,0,0,1,1851.78,407.58Zm70-143.06a35,35,0,1,1-35-35A35,35,0,0,1,1921.76,264.52Zm0,290.88a35,35,0,1,1-35-35A35,35,0,0,1,1921.76,555.4Z"
          transform="translate(-24 -20.47)"
        />
      </g>
      <g id="Layer_2" data-name="Layer 2">
        <path
          class="free-ticket-cls-2"
          d="M2677,144.31v670a123.83,123.83,0,0,1-123.84,123.84H1998.28a111.49,111.49,0,0,0-107.64-111.42l-3.87,2.53V728.7a35,35,0,0,0,0-70V590.39a35,35,0,0,0,0-70V442.57a35,35,0,0,0,0-70V299.51a35,35,0,1,0,0-70V132A111.52,111.52,0,0,0,1998.28,20.47h554.89c3.85,0,7.65.18,11.41.52A123.86,123.86,0,0,1,2677,144.31Z"
          transform="translate(-24 -20.47)"
        />
        <polygon class="free-ticket-cls-3" points="222.33 143.21 0 466.68 0 318.29 222.33 143.21" />
        <polygon
          class="free-ticket-cls-2"
          points="476.62 0 336.22 143.21 228.65 199.49 265.95 105.85 405.2 0 476.62 0"
        />
        <polygon
          class="free-ticket-cls-4"
          points="376.71 209.06 146.4 331.1 80.59 475.36 300.78 331.1 376.71 209.06"
        />
        <polygon
          class="free-ticket-cls-5"
          points="2421.24 114.24 2191.19 302.46 2095.58 638.25 2436.18 359.23 2421.24 114.24"
        />
        <path
          class="free-ticket-cls-6"
          d="M2086,575.68,1971,728.06l-84.19,19-81.63,18.38,56.53-47.31a35,35,0,0,0,53.52-44.79l124.49-104.18Z"
          transform="translate(-24 -20.47)"
        />
        <path
          class="free-ticket-cls-7"
          d="M1950.44,787.46l-59.8,39.23-3.87,2.53v-2.61A111.56,111.56,0,0,0,1783,897.32l-62.19,40.79H1617.15l153.16-150.65Z"
          transform="translate(-24 -20.47)"
        />
        <polygon
          class="free-ticket-cls-8"
          points="2447.41 0 2390.26 139.59 2303.25 352.12 2154.8 430.29 2154.79 430.29 1978.8 522.97 2154.47 159.08 2319.48 0 2447.41 0"
        />
        <path
          class="cls-9"
          d="M2677,144.31v38.48l-223.16,93.08-56.69,23.64,52.78-87.79h0L2564.58,21A123.86,123.86,0,0,1,2677,144.31Z"
          transform="translate(-24 -20.47)"
        />
        <path
          class="free-ticket-cls-10"
          d="M2017.35,116.14l-130.58,82.63L1642.56,353.3,1507.87,628.54,1853.69,419a35,35,0,0,1,58.52-35.45L2005.64,327,2193,63.43ZM1886.77,299.51a35,35,0,1,1,35-35A35,35,0,0,1,1886.77,299.51Z"
          transform="translate(-24 -20.47)"
        />
        <path
          class="free-ticket-cls-11"
          d="M2454.77,624.6l-107.93,62.31V811.54l107.93,62.31,107.93-62.31V686.91Zm-98.07,73.7,65.58,37.86-22.62,39.19-43,24.8Zm74.12,42.79,14.09,8.14-28.18,16.26Zm19,118.53-88.21-50.93,41.64-24,46.57,26.89Zm0-59.47L2413.13,779l36.71-21.2Zm0-59.46-14.09-8.14,14.09-24.39Zm0-52.25-22.63,39.19-65.58-37.87,88.21-50.93Zm9.86-49.61,88.21,50.93-65.59,37.87-22.62-39.19Zm33.1,126.66-28.17-16.26,14.08-8.14Zm-33.1-57.33,14.08,24.4-14.08,8.13Zm0,49.6,36.71,21.2-36.71,21.19Zm0,101.86V811.54l46.57-26.89,41.64,24Zm93.14-59.47-43-24.8-22.63-39.19,65.59-37.86Z"
          transform="translate(-24 -20.47)"
        />
      </g>
      <foreignObject x="0" y="0" width="1400" height="600" transform="translate(350 160)">
        <div
          style="
            height: 100%;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          "
        >
          <span style="font-size: 120px;color:#5CC1B6;">Devcon 2020</span>
          <p style="font-size: 125px;font-weight: bold;color: #060808; margin: 10px 0px 0px 0px;">${data.name}</p>
        </div>
      </foreignObject>
    </svg>
  `;
}
function createPremiumTicketSvg({ data }) {
  return `
  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2653.01 917.64"
    >
      <defs>
        <style>
          .premium-ticket-cls-1 {
            fill: url(#linear-gradient);
          }
          .premium-ticket-cls-2 {
            fill: #131541;
          }
          .premium-ticket-cls-3 {
            fill: url(#linear-gradient-2);
          }
          .premium-ticket-cls-4 {
            fill: url(#linear-gradient-3);
          }
          .premium-ticket-cls-5 {
            fill: url(#linear-gradient-4);
          }
          .premium-ticket-cls-6 {
            fill: url(#linear-gradient-5);
          }
          .premium-ticket-cls-7 {
            fill: url(#linear-gradient-6);
          }
          .premium-ticket-cls-8 {
            fill: url(#New_Gradient_Swatch_2);
          }
          .premium-ticket-cls-9 {
            fill: url(#linear-gradient-7);
          }
          .premium-ticket-cls-10 {
            fill: #3cbeb3;
          }
          .premium-ticket-cls-11 {
            fill: url(#linear-gradient-8);
          }
          .premium-ticket-cls-12 {
            fill: #fff;
          }
        </style>
        <linearGradient
          id="linear-gradient"
          x1="39.01"
          y1="503.92"
          x2="2692.02"
          y2="503.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.16" stop-color="#2e3192" />
          <stop offset="0.91" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="349.51"
          y1="56.17"
          x2="-132.02"
          y2="519.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f2f2f3" />
          <stop offset="0.2" stop-color="#f3a241" />
          <stop offset="0.78" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="228.65"
          y1="99.74"
          x2="476.62"
          y2="99.74"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3a241" />
          <stop offset="0.56" stop-color="#ef484e" />
          <stop offset="0.91" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="620.69"
          y1="222.68"
          x2="-465.65"
          y2="553.88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3a241" />
          <stop offset="0.48" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="2022.83"
          y1="512.25"
          x2="2493.99"
          y2="240.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3a241" />
          <stop offset="0.87" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="1820.15"
          y1="691.89"
          x2="2101"
          y2="691.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3a241" />
          <stop offset="0.91" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="New_Gradient_Swatch_2"
          x1="1596.52"
          y1="925.9"
          x2="1903.97"
          y2="853.77"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f2f2f3" />
          <stop offset="0.44" stop-color="#f3a241" />
          <stop offset="0.91" stop-color="#ef424e" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="2618.12"
          y1="-95.23"
          x2="1589.03"
          y2="814.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.47" stop-color="#3cbeb3" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="2253.45"
          y1="-25.21"
          x2="741.27"
          y2="1398.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stop-color="#3cbeb3" />
          <stop offset="0.9" stop-color="#f2f2f3" />
        </linearGradient>
      </defs>
      <g id="Layer_3" data-name="Layer 3">
        <path
          class="premium-ticket-cls-1"
          d="M2579.59,45.62c-3.76-.34-7.56-.52-11.41-.52H2013.29a111.51,111.51,0,1,1-223,0H162.85A123.85,123.85,0,0,0,39,168.94v670A123.84,123.84,0,0,0,162.85,962.74H1790.28a111.38,111.38,0,0,1,111.5-111.5c1.3,0,2.59,0,3.87.08a111.49,111.49,0,0,1,107.64,111.42h554.89A123.83,123.83,0,0,0,2692,838.9v-670A123.86,123.86,0,0,0,2579.59,45.62ZM1936.77,718.34a35,35,0,1,1-6.57-20.41A35,35,0,0,1,1936.77,718.34Zm-70-286.13a35,35,0,1,1,1.91,11.43A35,35,0,0,1,1866.79,432.21Zm70-143.06a35,35,0,1,1-35-35A35,35,0,0,1,1936.77,289.15Zm0,290.88a35,35,0,1,1-35-35A35,35,0,0,1,1936.77,580Z"
          transform="translate(-39.01 -45.1)"
        />
      </g>
      <g id="Layer_2" data-name="Layer 2">
        <path
          class="premium-ticket-cls-2"
          d="M2692,168.94v670a123.83,123.83,0,0,1-123.84,123.84H2013.29a111.49,111.49,0,0,0-107.64-111.42l-3.87,2.53V753.33a35,35,0,0,0,0-70V615a35,35,0,0,0,0-70V467.2a35,35,0,0,0,0-70V324.14a35,35,0,1,0,0-70V156.61A111.52,111.52,0,0,0,2013.29,45.1h554.89c3.85,0,7.65.18,11.41.52A123.86,123.86,0,0,1,2692,168.94Z"
          transform="translate(-39.01 -45.1)"
        />
        <polygon class="premium-ticket-cls-3" points="222.33 143.21 0 466.68 0 318.29 222.33 143.21" />
        <polygon
          class="premium-ticket-cls-4"
          points="476.62 0 336.22 143.21 228.65 199.49 265.95 105.85 405.2 0 476.62 0"
        />
        <polygon
          class="premium-ticket-cls-5"
          points="376.71 209.06 146.4 331.1 80.59 475.36 300.78 331.1 376.71 209.06"
        />
        <polygon
          class="premium-ticket-cls-6"
          points="2421.24 114.24 2191.19 302.46 2095.58 638.25 2436.18 359.23 2421.24 114.24"
        />
        <path
          class="premium-ticket-cls-7"
          d="M2101,600.31,1986,752.69l-84.19,19L1820.15,790l56.53-47.31a35,35,0,0,0,53.52-44.79l124.49-104.18Z"
          transform="translate(-39.01 -45.1)"
        />
        <path
          class="premium-ticket-cls-8"
          d="M1965.45,812.09l-59.8,39.23-3.87,2.53v-2.61A111.56,111.56,0,0,0,1798,922l-62.19,40.79H1632.16l153.16-150.65Z"
          transform="translate(-39.01 -45.1)"
        />
        <polygon
          class="premium-ticket-cls-9"
          points="2447.41 0 2390.26 139.59 2303.25 352.12 2154.8 430.29 2154.79 430.29 1978.8 522.97 2154.47 159.08 2319.48 0 2447.41 0"
        />
        <path
          class="premium-ticket-cls-10"
          d="M2692,168.94v38.48L2468.86,300.5l-56.69,23.64L2465,236.35h0L2579.59,45.62A123.86,123.86,0,0,1,2692,168.94Z"
          transform="translate(-39.01 -45.1)"
        />
        <path
          class="premium-ticket-cls-11"
          d="M2032.36,140.77,1901.78,223.4,1657.57,377.93,1522.88,653.17,1868.7,443.64a35,35,0,0,1,58.52-35.45l93.43-56.61L2208,88.06ZM1901.78,324.14a35,35,0,1,1,35-35A35,35,0,0,1,1901.78,324.14Z"
          transform="translate(-39.01 -45.1)"
        />
        <path
          class="premium-ticket-cls-12"
          d="M2469.78,649.23l-107.93,62.31V836.17l107.93,62.31,107.93-62.31V711.54Zm-98.07,73.7,65.58,37.86L2414.67,800l-43,24.8Zm74.12,42.79,14.09,8.14-28.18,16.26Zm19,118.53-88.21-50.93,41.64-24,46.57,26.89Zm0-59.47-36.71-21.19,36.71-21.2Zm0-59.46-14.09-8.14,14.09-24.39Zm0-52.25-22.63,39.19-65.58-37.87,88.21-50.93Zm9.86-49.61,88.21,50.93-65.59,37.87-22.62-39.19Zm33.1,126.66-28.17-16.26,14.08-8.14Zm-33.1-57.33,14.08,24.4-14.08,8.13Zm0,49.6,36.71,21.2-36.71,21.19Zm0,101.86V836.17l46.57-26.89,41.64,24Zm93.14-59.47-43-24.8-22.63-39.19,65.59-37.86Z"
          transform="translate(-39.01 -45.1)"
        />
      </g>
      <foreignObject x="0" y="0" width="1300" height="600" transform="translate(380 160)">
        <div
          style="
            height: 100%;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          "
        >
          <span style="font-size: 120px;color:#5CC1B6;">Devcon 2020</span>
          <p style="font-size: 125px;font-weight: bold;color: #ffffff; margin: 10px 0px 0px 0px;">${data.name}</p>
        </div>
      </foreignObject>
    </svg>
  `;
}

function createFreeCertSvg({ data, issueDate, userDid }) {
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2653.47 990.41"
  >
    <defs>
      <style>
        .cls-cert-normal-1,
        .cls-cert-normal-10,
        .cls-cert-normal-11,
        .cls-cert-normal-12,
        .cls-cert-normal-13,
        .cls-cert-normal-14,
        .cls-cert-normal-15,
        .cls-cert-normal-16,
        .cls-cert-normal-17,
        .cls-cert-normal-18,
        .cls-cert-normal-19,
        .cls-cert-normal-2,
        .cls-cert-normal-20,
        .cls-cert-normal-21,
        .cls-cert-normal-22,
        .cls-cert-normal-23,
        .cls-cert-normal-24,
        .cls-cert-normal-25,
        .cls-cert-normal-26,
        .cls-cert-normal-27,
        .cls-cert-normal-28,
        .cls-cert-normal-29,
        .cls-cert-normal-30,
        .cls-cert-normal-31,
        .cls-cert-normal-32,
        .cls-cert-normal-33,
        .cls-cert-normal-5,
        .cls-cert-normal-6,
        .cls-cert-normal-7,
        .cls-cert-normal-8,
        .cls-cert-normal-9 {
          fill: none;
        }
        .cls-cert-normal-1,
        .cls-cert-normal-10,
        .cls-cert-normal-11,
        .cls-cert-normal-12,
        .cls-cert-normal-13,
        .cls-cert-normal-14,
        .cls-cert-normal-15,
        .cls-cert-normal-16,
        .cls-cert-normal-17,
        .cls-cert-normal-18,
        .cls-cert-normal-19,
        .cls-cert-normal-20,
        .cls-cert-normal-21,
        .cls-cert-normal-22,
        .cls-cert-normal-23,
        .cls-cert-normal-24,
        .cls-cert-normal-25,
        .cls-cert-normal-26,
        .cls-cert-normal-27,
        .cls-cert-normal-28,
        .cls-cert-normal-29,
        .cls-cert-normal-30,
        .cls-cert-normal-31,
        .cls-cert-normal-33,
        .cls-cert-normal-5,
        .cls-cert-normal-6,
        .cls-cert-normal-7,
        .cls-cert-normal-8,
        .cls-cert-normal-9 {
          opacity: 0.15;
        }
        .cls-cert-normal-3 {
          fill: #f2f2f3;
        }
        .cls-cert-normal-4 {
          clip-path: url(#clip-path);
        }
        .cls-cert-normal-10,
        .cls-cert-normal-11,
        .cls-cert-normal-12,
        .cls-cert-normal-13,
        .cls-cert-normal-14,
        .cls-cert-normal-15,
        .cls-cert-normal-16,
        .cls-cert-normal-17,
        .cls-cert-normal-18,
        .cls-cert-normal-19,
        .cls-cert-normal-20,
        .cls-cert-normal-21,
        .cls-cert-normal-22,
        .cls-cert-normal-23,
        .cls-cert-normal-24,
        .cls-cert-normal-25,
        .cls-cert-normal-26,
        .cls-cert-normal-27,
        .cls-cert-normal-28,
        .cls-cert-normal-29,
        .cls-cert-normal-30,
        .cls-cert-normal-31,
        .cls-cert-normal-32,
        .cls-cert-normal-33,
        .cls-cert-normal-5,
        .cls-cert-normal-6,
        .cls-cert-normal-7,
        .cls-cert-normal-8,
        .cls-cert-normal-9 {
          stroke-miterlimit: 10;
          stroke-width: 1.77px;
        }
        .cls-cert-normal-5 {
          stroke: url(#linear-gradient-cert-normal);
        }
        .cls-cert-normal-6 {
          stroke: url(#linear-gradient-2-cert-normal);
        }
        .cls-cert-normal-7 {
          stroke: url(#linear-gradient-3-cert-normal);
        }
        .cls-cert-normal-8 {
          stroke: url(#linear-gradient-4-cert-normal);
        }
        .cls-cert-normal-9 {
          stroke: url(#linear-gradient-5-cert-normal);
        }
        .cls-cert-normal-10 {
          stroke: url(#linear-gradient-6-cert-normal);
        }
        .cls-cert-normal-11 {
          stroke: url(#linear-gradient-7-cert-normal);
        }
        .cls-cert-normal-12 {
          stroke: url(#linear-gradient-8-cert-normal);
        }
        .cls-cert-normal-13 {
          stroke: url(#linear-gradient-9-cert-normal);
        }
        .cls-cert-normal-14 {
          stroke: url(#linear-gradient-10-cert-normal);
        }
        .cls-cert-normal-15 {
          stroke: url(#linear-gradient-11-cert-normal);
        }
        .cls-cert-normal-16 {
          stroke: url(#linear-gradient-12-cert-normal);
        }
        .cls-cert-normal-17 {
          stroke: url(#linear-gradient-13-cert-normal);
        }
        .cls-cert-normal-18 {
          stroke: url(#linear-gradient-14-cert-normal);
        }
        .cls-cert-normal-19 {
          stroke: url(#linear-gradient-15-cert-normal);
        }
        .cls-cert-normal-20 {
          stroke: url(#linear-gradient-16-cert-normal);
        }
        .cls-cert-normal-21 {
          stroke: url(#linear-gradient-17-cert-normal);
        }
        .cls-cert-normal-22 {
          stroke: url(#linear-gradient-18-cert-normal);
        }
        .cls-cert-normal-23 {
          stroke: url(#linear-gradient-19-cert-normal);
        }
        .cls-cert-normal-24 {
          stroke: url(#linear-gradient-20-cert-normal);
        }
        .cls-cert-normal-25 {
          stroke: url(#linear-gradient-21-cert-normal);
        }
        .cls-cert-normal-26 {
          stroke: url(#linear-gradient-22-cert-normal);
        }
        .cls-cert-normal-27 {
          stroke: url(#linear-gradient-23-cert-normal);
        }
        .cls-cert-normal-28 {
          stroke: url(#linear-gradient-24-cert-normal);
        }
        .cls-cert-normal-29 {
          stroke: url(#linear-gradient-25-cert-normal);
        }
        .cls-cert-normal-30 {
          stroke: url(#linear-gradient-26-cert-normal);
        }
        .cls-cert-normal-31 {
          stroke: url(#linear-gradient-27-cert-normal);
        }
        .cls-cert-normal-32 {
          stroke: url(#New_Gradient_Swatch_4-cert-normal);
        }
        .cls-cert-normal-33 {
          stroke: url(#linear-gradient-28-cert-normal);
        }
        .cls-cert-normal-34 {
          fill: url(#linear-gradient-29-cert-normal);
        }
        .cls-cert-normal-35 {
          fill: url(#linear-gradient-30-cert-normal);
        }
        .cls-cert-normal-36 {
          fill: #f3a241;
        }
        .cls-cert-normal-37 {
          fill: url(#linear-gradient-31-cert-normal);
        }
        .cls-cert-normal-38 {
          fill: #fff;
        }
        .cls-cert-normal-39 {
          clip-path: url(#clip-path-2-cert-normal);
        }
        .cls-cert-normal-40 {
          fill: url(#New_Gradient_Swatch_6-cert-normal);
        }
        .cls-cert-normal-41 {
          fill: url(#linear-gradient-32-cert-normal);
        }
        .cls-cert-normal-42 {
          fill: url(#linear-gradient-33-cert-normal);
        }
        .cls-cert-normal-43 {
          fill: url(#linear-gradient-34-cert-normal);
        }
      </style>
      <clipPath id="clip-path" transform="translate(0.04 34.74)">
        <path
          class="cls-cert-normal-1"
          d="M311.68.36H2653a0,0,0,0,1,0,0v606A311.69,311.69,0,0,1,2341.31,918H0a0,0,0,0,1,0,0V312A311.69,311.69,0,0,1,311.68.36Z"
        />
      </clipPath>
      <linearGradient
        id="linear-gradient-cert-normal"
        x1="-0.04"
        y1="-0.93"
        x2="2653.43"
        y2="-0.93"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#ac5268" />
        <stop offset="0.13" stop-color="#a2526b" />
        <stop offset="0.35" stop-color="#855074" />
        <stop offset="0.63" stop-color="#584f81" />
        <stop offset="0.97" stop-color="#194c94" />
        <stop offset="1" stop-color="#134c96" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2-cert-normal"
        x1="-0.04"
        y1="33.25"
        x2="2653.43"
        y2="33.25"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-3-cert-normal"
        x1="-0.04"
        y1="67.43"
        x2="2653.43"
        y2="67.43"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-4-cert-normal"
        x1="-0.04"
        y1="101.6"
        x2="2653.43"
        y2="101.6"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-5-cert-normal"
        x1="-0.04"
        y1="135.78"
        x2="2653.43"
        y2="135.78"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-6-cert-normal"
        x1="-0.04"
        y1="169.96"
        x2="2653.43"
        y2="169.96"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-7-cert-normal"
        x1="-0.04"
        y1="204.14"
        x2="2653.43"
        y2="204.14"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-8-cert-normal"
        x1="-0.04"
        y1="238.31"
        x2="2653.43"
        y2="238.31"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-9-cert-normal"
        x1="-0.04"
        y1="272.49"
        x2="2653.43"
        y2="272.49"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-10-cert-normal"
        x1="-0.04"
        y1="306.67"
        x2="2653.43"
        y2="306.67"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-11-cert-normal"
        x1="-0.04"
        y1="340.85"
        x2="2653.43"
        y2="340.85"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-12-cert-normal"
        x1="-0.04"
        y1="375.02"
        x2="2653.43"
        y2="375.02"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-13-cert-normal"
        x1="-0.04"
        y1="409.2"
        x2="2653.43"
        y2="409.2"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-14-cert-normal"
        x1="-0.04"
        y1="443.38"
        x2="2653.43"
        y2="443.38"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-15-cert-normal"
        x1="-0.04"
        y1="477.56"
        x2="2653.43"
        y2="477.56"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-16-cert-normal"
        x1="-0.04"
        y1="511.74"
        x2="2653.43"
        y2="511.74"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-17-cert-normal"
        x1="-0.04"
        y1="545.91"
        x2="2653.43"
        y2="545.91"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-18-cert-normal"
        x1="-0.04"
        y1="580.09"
        x2="2653.43"
        y2="580.09"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-19-cert-normal"
        x1="-0.04"
        y1="614.27"
        x2="2653.43"
        y2="614.27"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-20-cert-normal"
        x1="-0.04"
        y1="648.45"
        x2="2653.43"
        y2="648.45"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-21-cert-normal"
        x1="-0.04"
        y1="682.62"
        x2="2653.43"
        y2="682.62"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-22-cert-normal"
        x1="-0.04"
        y1="716.8"
        x2="2653.43"
        y2="716.8"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-23-cert-normal"
        x1="-0.04"
        y1="750.98"
        x2="2653.43"
        y2="750.98"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-24-cert-normal"
        x1="-0.04"
        y1="785.16"
        x2="2653.43"
        y2="785.16"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-25-cert-normal"
        x1="-0.04"
        y1="819.33"
        x2="2653.43"
        y2="819.33"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-26-cert-normal"
        x1="-0.04"
        y1="853.51"
        x2="2653.43"
        y2="853.51"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-27-cert-normal"
        x1="-0.04"
        y1="887.69"
        x2="2653.43"
        y2="887.69"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="New_Gradient_Swatch_4-cert-normal"
        x1="-0.04"
        y1="906.8"
        x2="92.48"
        y2="906.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#2c378c" />
        <stop offset="0.19" stop-color="#30378b" />
        <stop offset="0.37" stop-color="#3b3987" />
        <stop offset="0.54" stop-color="#4d3b82" />
        <stop offset="0.7" stop-color="#673d7a" />
        <stop offset="0.86" stop-color="#88416f" />
        <stop offset="1" stop-color="#ac4564" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-28-cert-normal"
        x1="91.64"
        y1="921.87"
        x2="2653.43"
        y2="921.87"
        xlink:href="#linear-gradient-cert-normal"
      />
      <linearGradient
        id="linear-gradient-29-cert-normal"
        x1="2179.78"
        y1="678.67"
        x2="2556.71"
        y2="678.67"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#e76e4e" />
        <stop offset="1" stop-color="#f3903f" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-30-cert-normal"
        x1="2276.05"
        y1="438.83"
        x2="2581.33"
        y2="64.09"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.63" stop-color="#f3903f" />
        <stop offset="1" stop-color="#e25e52" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-31-cert-normal"
        x1="2366.79"
        y1="60.41"
        x2="2234.14"
        y2="225.97"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#b2ddd7" />
        <stop offset="0.09" stop-color="#9ed6cf" />
        <stop offset="0.27" stop-color="#7ccbc1" />
        <stop offset="0.42" stop-color="#68c4b9" />
        <stop offset="0.51" stop-color="#60c1b6" />
      </linearGradient>
      <clipPath id="clip-path-2-cert-normal" transform="translate(0.04 34.74)">
        <path
          class="cls-cert-normal-2"
          d="M311.68.36H2653a0,0,0,0,1,0,0v606A311.69,311.69,0,0,1,2341.31,918H0a0,0,0,0,1,0,0V312A311.69,311.69,0,0,1,311.68.36Z"
        />
      </clipPath>
      <linearGradient
        id="New_Gradient_Swatch_6-cert-normal"
        x1="426.24"
        y1="404.96"
        x2="146.56"
        y2="956.38"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#f3903f" />
        <stop offset="1" stop-color="#e76e4e" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-32-cert-normal"
        x1="266.12"
        y1="218.04"
        x2="-119.78"
        y2="574.63"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.42" stop-color="#f3903f" />
        <stop offset="1" stop-color="#de5054" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-33-cert-normal"
        x1="781.94"
        y1="430.87"
        x2="392.85"
        y2="916.53"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fff" />
        <stop offset="0.05" stop-color="#d6efec" />
        <stop offset="0.1" stop-color="#b2e1dc" />
        <stop offset="0.16" stop-color="#94d5ce" />
        <stop offset="0.22" stop-color="#7dccc3" />
        <stop offset="0.28" stop-color="#6dc6bc" />
        <stop offset="0.35" stop-color="#63c2b7" />
        <stop offset="0.44" stop-color="#60c1b6" />
        <stop offset="0.5" stop-color="#60c1b6" />
        <stop offset="0.92" stop-color="#60c1b6" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-34-cert-normal"
        x1="629.23"
        y1="-116.6"
        x2="-109.37"
        y2="928.81"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fff" />
        <stop offset="0.04" stop-color="#e9f7f5" />
        <stop offset="0.12" stop-color="#c5e8e4" />
        <stop offset="0.2" stop-color="#a5dcd6" />
        <stop offset="0.3" stop-color="#8cd2ca" />
        <stop offset="0.4" stop-color="#78cac1" />
        <stop offset="0.52" stop-color="#6ac5bb" />
        <stop offset="0.66" stop-color="#62c2b7" />
        <stop offset="0.92" stop-color="#60c1b6" />
      </linearGradient>
    </defs>
    <g id="Layer_6" data-name="Layer 6">
      <path
        class="cls-cert-normal-3"
        d="M2653,.36V606.31C2653,778.45,2513.45,918,2341.31,918H0V312.05a312.48,312.48,0,0,1,8-70.29C39.82,103.47,163.71.36,311.68.36Z"
        transform="translate(0.04 34.74)"
      />
    </g>
    <g id="lines">
      <g class="cls-cert-normal-4">
        <path
          class="cls-cert-normal-5"
          d="M2653-23l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L2402.25-23a90.51,90.51,0,0,0-85.92,0L2233.9,21.15a90.51,90.51,0,0,1-85.92,0L2065.56-23a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L1728.88-23A90.51,90.51,0,0,0,1643-23l-82.43,44.16a90.51,90.51,0,0,1-85.92,0L1392.19-23a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L1055.51-23a90.51,90.51,0,0,0-85.92,0L887.16,21.15a90.51,90.51,0,0,1-85.92,0L718.82-23a90.51,90.51,0,0,0-85.92,0L550.48,21.15a90.51,90.51,0,0,1-85.92,0L382.14-23a90.53,90.53,0,0,0-85.93,0L213.79,21.15a90.51,90.51,0,0,1-85.92,0L45.45-23A90.78,90.78,0,0,0,0-33.82"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-6"
          d="M2653,11.17l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L2233.9,55.33a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L887.16,55.33a90.51,90.51,0,0,1-85.92,0L718.82,11.17a90.51,90.51,0,0,0-85.92,0L550.48,55.33a90.51,90.51,0,0,1-85.92,0L382.14,11.17a90.53,90.53,0,0,0-85.93,0L213.79,55.33a90.51,90.51,0,0,1-85.92,0L45.45,11.17A90.78,90.78,0,0,0,0,.36"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-7"
          d="M2653,45.34l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L2233.9,89.51a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L887.16,89.51a90.57,90.57,0,0,1-85.92,0L718.82,45.34a90.57,90.57,0,0,0-85.92,0L550.48,89.51a90.57,90.57,0,0,1-85.92,0L382.14,45.34a90.59,90.59,0,0,0-85.93,0L213.79,89.51a90.57,90.57,0,0,1-85.92,0L45.45,45.34A90.77,90.77,0,0,0,0,34.54"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-8"
          d="M2653,79.52l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0L718.82,79.52a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0L382.14,79.52a90.59,90.59,0,0,0-85.93,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0L45.45,79.52A90.78,90.78,0,0,0,0,68.71"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-9"
          d="M2653,113.7l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0L718.82,113.7a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L382.14,113.7a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,113.7A90.78,90.78,0,0,0,0,102.89"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-10"
          d="M2653,147.88,2570.59,192a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L2233.9,192a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L1897.22,192a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L1560.53,192a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L1223.85,192a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L887.16,192a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L550.48,192a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0L213.79,192a90.51,90.51,0,0,1-85.92,0L45.45,147.88A90.78,90.78,0,0,0,0,137.07"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-11"
          d="M2653,182.06l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,182.06A90.78,90.78,0,0,0,0,171.25"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-12"
          d="M2653,216.23l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L2233.9,260.4a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L887.16,260.4a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L550.48,260.4a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.59,90.59,0,0,0-85.93,0L213.79,260.4a90.57,90.57,0,0,1-85.92,0L45.45,216.23A90.88,90.88,0,0,0,0,205.42"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-13"
          d="M2653,250.41l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,250.41A90.78,90.78,0,0,0,0,239.6"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-14"
          d="M2653,284.59l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,284.59A90.78,90.78,0,0,0,0,273.78"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-15"
          d="M2653,318.77l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,318.77A90.78,90.78,0,0,0,0,308"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-16"
          d="M0,342.14a90.77,90.77,0,0,1,45.46,10.8l82.42,44.17a90.57,90.57,0,0,0,85.92,0l82.42-44.17a90.59,90.59,0,0,1,85.93,0l82.42,44.17a90.57,90.57,0,0,0,85.92,0l82.42-44.17a90.57,90.57,0,0,1,85.92,0l82.42,44.17a90.57,90.57,0,0,0,85.92,0l82.43-44.17a90.57,90.57,0,0,1,85.92,0l82.42,44.17a90.57,90.57,0,0,0,85.92,0l82.42-44.17a90.57,90.57,0,0,1,85.92,0l82.42,44.17a90.57,90.57,0,0,0,85.92,0L1643,352.94a90.57,90.57,0,0,1,85.92,0l82.42,44.17a90.57,90.57,0,0,0,85.92,0l82.42-44.17a90.57,90.57,0,0,1,85.92,0L2148,397.11a90.57,90.57,0,0,0,85.92,0l82.43-44.17a90.57,90.57,0,0,1,85.92,0l82.42,44.17a90.57,90.57,0,0,0,85.92,0L2653,352.94"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-17"
          d="M2653,387.12l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,387.12A90.78,90.78,0,0,0,0,376.31"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-18"
          d="M2653,421.3l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0L718.82,421.3a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L382.14,421.3a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,421.3A90.78,90.78,0,0,0,0,410.49"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-19"
          d="M2653,455.48l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,455.48A90.78,90.78,0,0,0,0,444.67"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-20"
          d="M2653,489.65l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.59,90.59,0,0,0-85.93,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0L45.45,489.65A90.77,90.77,0,0,0,0,478.85"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-21"
          d="M2653,523.83,2570.59,568a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L2233.9,568a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L1897.22,568a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L1560.53,568a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L1223.85,568a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L887.16,568a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0L550.48,568a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0L213.79,568a90.51,90.51,0,0,1-85.92,0L45.45,523.83A90.78,90.78,0,0,0,0,513"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-22"
          d="M2653,558l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L2402.25,558a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0L2065.56,558a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L1728.88,558a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0L1392.19,558a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L1055.51,558a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0L718.82,558a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L382.14,558a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,558A90.78,90.78,0,0,0,0,547.2"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-23"
          d="M2653,592.19l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,592.19A90.78,90.78,0,0,0,0,581.38"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-24"
          d="M2653,626.36l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.59,90.59,0,0,0-85.93,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0L45.45,626.36A90.77,90.77,0,0,0,0,615.56"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-25"
          d="M2653,660.54l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.51,90.51,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.51,90.51,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.51,90.51,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.51,90.51,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.51,90.51,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.51,90.51,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.53,90.53,0,0,0-85.93,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0L45.45,660.54A90.78,90.78,0,0,0,0,649.73"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-26"
          d="M2653,694.72l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,694.72A90.78,90.78,0,0,0,0,683.91"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-27"
          d="M2653,728.9l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0L718.82,728.9a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L382.14,728.9a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,728.9A90.78,90.78,0,0,0,0,718.09"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-28"
          d="M2653,763.07l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.59,90.59,0,0,0-85.93,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0L45.45,763.07A90.77,90.77,0,0,0,0,752.27"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-29"
          d="M2653,797.25l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.43,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0l-82.42-44.17a90.59,90.59,0,0,0-85.93,0l-82.42,44.17a90.57,90.57,0,0,1-85.92,0L45.45,797.25A90.78,90.78,0,0,0,0,786.44"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-30"
          d="M2653,831.43l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,831.43A90.78,90.78,0,0,0,0,820.62"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-31"
          d="M2653,865.61l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.43,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.51,90.51,0,0,0-85.92,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0l-82.42-44.16a90.53,90.53,0,0,0-85.93,0l-82.42,44.16a90.51,90.51,0,0,1-85.92,0L45.45,865.61A90.78,90.78,0,0,0,0,854.8"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-32"
          d="M92.06,924.76l-46.61-25A90.77,90.77,0,0,0,0,889"
          transform="translate(0.04 34.74)"
        />
        <path
          class="cls-cert-normal-33"
          d="M2653,899.78,2570.59,944a90.51,90.51,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L2233.9,944a90.51,90.51,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L1897.22,944a90.51,90.51,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L1560.53,944a90.51,90.51,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L1223.85,944a90.51,90.51,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L887.16,944a90.51,90.51,0,0,1-85.92,0l-82.42-44.17a90.57,90.57,0,0,0-85.92,0L550.48,944a90.51,90.51,0,0,1-85.92,0l-82.42-44.17a90.59,90.59,0,0,0-85.93,0L213.79,944a90.51,90.51,0,0,1-85.92,0L92.06,924.76"
          transform="translate(0.04 34.74)"
        />
      </g>
    </g>
    <g id="orange_triangles" data-name="orange triangles">
      <circle class="cls-cert-normal-34" cx="2368.25" cy="678.67" r="188.46" />
      <polygon
        class="cls-cert-normal-35"
        points="2281.05 257.79 2653.04 150.98 2653.04 34.74 2472.6 34.74 2281.05 257.79"
      />
      <polygon
        class="cls-cert-normal-36"
        points="2218.37 299.87 2078.9 467.84 2279.28 426.1 2483.2 247.78 2218.37 299.87"
      />
      <polygon
        class="cls-cert-normal-37"
        points="2378.53 68.41 2268.99 124.4 2183.57 238.32 2366.47 118.88 2378.53 68.41"
      />
      <path
        class="cls-cert-normal-38"
        d="M2368.21,519.31l-107.92,62.31V706.25l107.92,62.31,107.93-62.31V581.62Zm-4.93,116.09-14.08-8.14,14.08-24.4Zm-4.92,8.53-28.18,16.27,14.09-24.4Zm4.92,8.54v42.39l-36.71-21.19Zm9.86,0,36.71,21.2-36.71,21.19Zm4.93-8.54,14.09-8.13,14.09,24.4Zm-4.93-8.53V602.86l14.09,24.4Zm0-52.25V533.54l88.21,50.93-65.58,37.86Zm-9.86,0-22.62,39.18-65.59-37.86,88.21-50.93Zm-27.55,47.72-22.63,39.19-43,24.8V593Zm-19,48.49,46.57,26.89v48.08l-88.21-50.93Zm56.43,26.89,46.57-26.89,41.64,24-88.21,50.93Zm50.18-36.19-22.62-39.19L2466.28,593V694.86Z"
        transform="translate(0.04 34.74)"
      />
    </g>
    <g id="Layer_7" data-name="Layer 7">
      <g class="cls-cert-normal-39">
        <polygon
          class="cls-cert-normal-40"
          points="352.66 952.74 0.03 952.74 0.03 842.58 112.46 754.9 267.97 633.63 267.98 633.62 345.33 573.29 350.55 843.45 352.66 952.74"
        />
        <polygon
          class="cls-cert-normal-36"
          points="574.23 464.13 425.21 645.21 637.22 581 574.23 464.13"
        />
        <polygon
          class="cls-cert-normal-36"
          points="637.22 810.7 563.02 952.74 429.23 952.74 637.22 810.7"
        />
        <path
          class="cls-cert-normal-41"
          d="M353,159.7,283.75,261.5,78.56,563.26,0,678.8V312.05a312.48,312.48,0,0,1,8-70.29Z"
          transform="translate(0.04 34.74)"
        />
        <polygon
          class="cls-cert-normal-42"
          points="865.55 493.74 375.18 952.74 244.52 952.74 277.93 892.76 350.55 843.45 865.55 493.74"
        />
        <polygon
          class="cls-cert-normal-43"
          points="38.6 412.7 140.01 882.53 492.35 197.18 38.6 412.7"
        />
      </g>
    </g>
    <foreignObject
      x="0"
      y="0"
      width="2000"
      height="600"
      transform="translate(350 200)"
    >
      <div
        style="
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div
          style="display: flex; flex-direction: column; align-items: center;"
        >
          <span style="color: #5cc1b6; font-size: 90px;">DevCon2020</span>
          <span
            style="
              color: #222222;
              font-size: 120px;
              font-weight: bold;
              margin-top: 20px;
              text-transform: uppercase;
            "
            >${data.name}</span
          >
        </div>
        <div
          style="display: flex; flex-direction: column; align-items: center;"
        >
          <span
            style="
              color: #222222;
              font-size: 80px;
              text-decoration: underline;
              text-decoration-color: #222222;
            "
            >${userDid}</span
          >
          <span style="color: #222222; font-size: 60px; margin-top: 10px;"
            >${issueDate}</span
          >
        </div>
      </div>
    </foreignObject>
  </svg>
  `;
}

function getFactors(userDid, certType) {
  const binary = ForgeSDK.Util.fromBase58(userDid);
  const topic = ForgeSDK.Util.toBuffer(ForgeSDK.Util.utf8ToHex(certType));
  const originHex = ForgeSDK.Util.toHex(Buffer.concat([binary, topic]))
    .replace(/^0x/, '')
    .toUpperCase();
  const hex = Mcrypto.Hasher.SHA2.hash224(originHex);
  const factors = [];
  const total = hex;
  const factorCount = 10;
  const factorLength = Math.floor(hex.length / factorCount);
  for (let i = 0; i < factorCount; i++) {
    const factor = total.slice(i * factorLength, i * factorLength + factorLength);
    factors.push(ForgeSDK.Util.hexToNumber(factor));
  }
  return factors;
}

function createProCert({ data, issueDate, userDid, certType }) {
  const randomNumByFactors = getFactors(userDid, certType)[0];
  const allProCerts = [
    proCertBlueSvg,
    proCertDarkRedSvg,
    proCertGreySvg,
    proCertOrangeSvg,
    proCertPurpleSvg,
    proCertRedSvg,
  ];
  return allProCerts[randomNumByFactors % allProCerts.length]({ data, issueDate, userDid });
}

module.exports = {
  createFreeTicketSvg,
  createPremiumTicketSvg,
  createProCert,
  createFreeCertSvg,
};
