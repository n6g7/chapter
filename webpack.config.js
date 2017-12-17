const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './index.js'],
  resolve: {
    alias: {
      'highcharts-more': 'highcharts/highcharts-more.src.js',
      '@actions': path.resolve(__dirname, 'src/redux/actions')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader', 'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg)$/,
        exclude: /node_modules/,
        use: [
          'url-loader', 'img-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new Dotenv()
  ]
}
