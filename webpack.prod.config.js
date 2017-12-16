const path = require('path')

const environments = {
  production: {
    googleApiKey: 'AIzaSyCGJLle1uZO6BzHvdYdwY7JEHuHoz8Av-s',
    firebase: {
      apiKey: 'AIzaSyC2PVLteeEKm0YmFE6oizPiXTRiW8qyy8o',
      authDomain: 'bamboo-theorem-b8d0a.firebaseapp.com',
      databaseURL: 'https://bamboo-theorem-b8d0a.firebaseio.com'
    }
  }
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './index.jsx'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'highcharts-more': 'highcharts/highcharts-more.src.js'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  externals: {
    config: JSON.stringify(environments[process.env.NODE_ENV])
  }
}
