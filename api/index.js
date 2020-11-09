/* eslint-disable no-console */
require('dotenv').config();

const env = require('./libs/env');
const { server } = require('./functions/app');

const port = parseInt(process.env.BLOCKLET_PORT || process.env.APP_PORT || 3000, 10);
server.listen(port, err => {
  if (err) throw err;
  console.log(`> DevCon App ready on ${env.baseUrl}`);
});
