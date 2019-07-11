const express = require('express');
const path = require('path');

const app = express();
const assetsDirName = 'assets';
const ClientStatsPath = path.join(
  __dirname,
  `./../${assetsDirName}/stats.json`
);
const ServerRendererPath = path.join(
  __dirname,
  `./../${assetsDirName}/js/server.js`
);
// eslint-disable-next-line import/no-dynamic-require
const ServerRenderer = require(ServerRendererPath).default;
// eslint-disable-next-line import/no-dynamic-require
const Stats = require(ClientStatsPath);

app.use(
  `/${assetsDirName}`,
  express.static(path.join(__dirname, `../${assetsDirName}`))
);
app.use(ServerRenderer(Stats));

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line consistent-return
app.listen(PORT, error => {
  if (error) {
    return console.error(error);
  }
  console.log(`Production Express server running at http://localhost:${PORT}`);
});
