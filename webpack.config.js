const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const baseConfig = require('./webpack.prod.config.js');

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ].concat(baseConfig.entry),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style!css!stylus'
      },
      {
        test: /\.(png|svg)$/,
        exclude: /node_modules/,
        loader: 'url!img'
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  externals: {
    config: JSON.stringify({
      googleApiKey: 'AIzaSyCf1cp94cx0m09VuCeMcqpX_v3oy3V_yFI',
      firebase: {
        apiKey: "AIzaSyC2PVLteeEKm0YmFE6oizPiXTRiW8qyy8o",
        authDomain: "bamboo-theorem-b8d0a.firebaseapp.com",
        databaseURL: "https://bamboo-theorem-b8d0a.firebaseio.com",
      }
    })
  }
});
