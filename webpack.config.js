const webpack = require('webpack');
const baseConfig = require('./webpack.prod.config.js');

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    baseConfig.entry
  ],
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
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style!css!stylus'
      },
      {
        test: /\.png$/,
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
    new webpack.HotModuleReplacementPlugin()
  ],
  externals: {
    config: JSON.stringify({
      googleApiKey: 'AIzaSyCf1cp94cx0m09VuCeMcqpX_v3oy3V_yFI'
    })
  }
});
