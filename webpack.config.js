var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
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
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
