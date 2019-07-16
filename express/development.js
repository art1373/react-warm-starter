const express = require('express');

const app = express();
const assetsDirName = 'assets';
const webpack = require('webpack');
// eslint-disable-next-line
const config = require('./../webpack.development.config.js');

const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: `/${assetsDirName}`,
    watchOptions: {
      ignored: [/node_modules[\\/]/],
    },
  })
);

app.use(
  webpackHotMiddleware(
    compiler.compilers.find(_compiler => _compiler.name === 'client')
  )
);

app.use(webpackHotServerMiddleware(compiler));

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line consistent-return
app.listen(PORT, error => {
  if (error) {
    return console.error(error);
  }
  console.log(`Development Express server running at http://localhost:${PORT}`);
});
