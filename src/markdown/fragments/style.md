<style>
  .speaker-tip{
    padding-top: 0;
    padding-bottom: 0;
    background-color: #fbfbfb;
  }
  .partner-tip{
    background-color: #ffffff !important;
  }
  .speaker-tip h2{
    font-size: 12px;
    text-align: center;
    font-style: italic;
    color: #999999 !important;
  }
  #schedule{
    width: 100%;
  }
  #schedule .section__content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tip{
    text-align: right;
    font-size: 12px;
    font-style: italic;
    margin-bottom: 0 !important;
  }
  .tip-schedule{
    width: 90%;
  }
  .home-theme ul{
    position: relative;
  }
  .home-theme ul li{
    margin: 10px 0 10px 10px;
  }
  .home-theme ul li::before{
    position: absolute;
    content: '-';
    left: 0;
    font-weight: bold;
  }
  .home-theme .section__subtitle{
    font-size: 24px;
    margin-top: 2vw;
  }
  .home-theme .MuiTypography-h4-9{
    font-size: 24px;
    margin-top: 2vw;
    margin-bottom: 2vw;
  }
  .home-theme-no-prefix ul li::before{
    display: none;
  }
  .home-theme-no-prefix ul li{
    font-weight: 500;
  }
  .get-ticket-btn{
    margin-top: 16px;
  }
  .schedule-section ul{
    width: 480px;
    margin: 0 auto;
  }
  .schedule-section ul li{
    text-align: left;
  }
  .avatar{
    margin-top: 40px;
  }
  .avatar .avatar__title{
    text-transform: none !important;
  }
  .avatar .avatar__description{
    text-transform: none !important;
  }
  .partner-avatar .avatar__title{
    display: none;
  }
  .partner-avatar .section__content .avatar{
    justify-content: center !important;
  }
  .partner-avatar .avatar__image{
    max-width: 200px;
    max-height: 80px;
    width: auto !important;
    height: auto !important;
    display: block;
    margin: 0px auto;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
  }
  table, th, td {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  table, tr, td {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  table tr td a{
    text-decoration:underline !important;
  }
  table {
    width: 90%;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 30px auto;
  }
  table.striped tr {
    border-bottom: none !important;
  }
  table.striped > tbody > tr:nth-child(odd) {
    background-color: rgba(242, 242, 242, 0.5);
  }
  table.striped > tbody > tr > td {
    border-radius: 0;
  }
  table.highlight > tbody > tr {
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
  }
  table.highlight > tbody > tr:hover {
    background-color: rgba(242, 242, 242, 0.5);
  }
  table.centered thead tr th, table.centered tbody tr td {
    text-align: center;
  }
  table thead{
    background-color: rgba(242, 242, 242, 0.2);
  }
  tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    width: 100%;
  }
  tr th:nth-child(1){
    width: 20%;
    text-align: center;
  }
  tr th:nth-child(2){
    width: 60%;
    text-align: left;
  }
  tr th:nth-child(3){
    width: 20%;
    text-align: center;
  }
  tr td:nth-child(1){
    width: 20%;
    text-align: center;
  }
  tr td:nth-child(2){
    width: 60%;
    text-align: left;
  }
  tr td:nth-child(3){
    width: 20%;
    text-align: center;
  }
  td, th {
    padding: 15px 5px;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-radius: 2px;
  }
  @media only screen and (max-width: 992px) {
    table.responsive-table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      display: block;
      position: relative;
    }
    table.responsive-table td:empty:before {
      content: '\00a0';
    }
    table.responsive-table th,
    table.responsive-table td {
      margin: 0;
      vertical-align: top;
    }
    table.responsive-table th {
      text-align: left;
    }
    table.responsive-table thead {
      display: block;
      float: left;
    }
    table.responsive-table thead tr {
      display: block;
      padding: 0 10px 0 0;
    }
    table.responsive-table thead tr th::before {
      content: "\00a0";
    }
    table.responsive-table tbody {
      display: block;
      width: auto;
      position: relative;
      overflow-x: auto;
      white-space: nowrap;
    }
    table.responsive-table tbody tr {
      display: inline-block;
      vertical-align: top;
    }
    table.responsive-table th {
      display: block;
      text-align: right;
    }
    table.responsive-table td {
      display: block;
      min-height: 1.25em;
      text-align: left;
    }
    table.responsive-table tr {
      border-bottom: none;
      padding: 0 10px;
    }
    table.responsive-table thead {
      border: 0;
      border-right: 1px solid rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 768px) {
    .section--image-background.section--hero{
      height: 800px;
    }
    .home-theme-no-prefix ul li{
      font-size: 14px;
    }
    #arcblock-video{
      width: 100%;
      height: 225px;
    }
    tr th{
      font-size: 14px;
    }
    tr td{
      font-size: 14px;
    }
    .schedule-section ul{
      width: 100%;
      margin: 0 auto;
    }
    .schedule-section ul li{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
