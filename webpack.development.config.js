/* eslint-disable sort-keys-fix/sort-keys-fix */
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const getClientEnvironment = require('./src/utils/env');

const assetsDirName = 'assets';
const outputImagesDirName = 'img';
const outputFontsDirName = 'font';

const distDir = path.join(__dirname, assetsDirName);
const srcDir = path.join(__dirname, './src');
const env = getClientEnvironment('development');

module.exports = [
  {
    name: 'client',
    target: 'web',
    mode: 'development',
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
    entry: {
      client: `${srcDir}/client.jsx`,
      vendor: [
        'react',
        'react-dom',
        'react-helmet',
        'react-router-dom',
        'axios',
        'dotenv',
        'dotenv-expand',
        'formik',
        // 'material-snackbar-supplier',
        'redux',
        'react-redux',
        'redux-saga',
        'serialize-javascript',
        'classnames',
        '@babel/polyfill',
        'yup',
      ],
    },
    output: {
      path: distDir,
      filename: 'js/[name].js',
      publicPath: distDir,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '~': srcDir,
      },
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]',
            publicPath: `/${assetsDirName}/${outputFontsDirName}`,
            outputPath: outputFontsDirName,
          },
        },
        {
          test: /\.(jpg|png)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]',
            publicPath: `/${assetsDirName}/${outputImagesDirName}`,
            outputPath: outputImagesDirName,
          },
        },
      ],
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        cacheGroups: {
          vendors: {
            test: 'vendor',
            filename: 'js/[name].js',
            enforce: true,
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new webpack.DefinePlugin(env.stringified),
      new BundleAnalyzerPlugin({
        analyzerPort: 6985,
        openAnalyzer: true,
      }),
    ],
  },
  {
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: `${srcDir}/server.jsx`,
    output: {
      path: distDir,
      filename: 'js/server.js',
      libraryTarget: 'commonjs2',
      publicPath: distDir,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '~': srcDir,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]',
            publicPath: `/${assetsDirName}/${outputFontsDirName}`,
            outputPath: outputFontsDirName,
          },
        },
        {
          test: /\.(jpg|png)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]',
            publicPath: `/${assetsDirName}/${outputImagesDirName}`,
            outputPath: outputImagesDirName,
          },
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(env.stringified)],
  },
];
