const environments = {
  production: {
    googleApiKey: 'AIzaSyCGJLle1uZO6BzHvdYdwY7JEHuHoz8Av-s',
    firebase: {
      apiKey: "AIzaSyC2PVLteeEKm0YmFE6oizPiXTRiW8qyy8o",
      authDomain: "bamboo-theorem-b8d0a.firebaseapp.com",
      databaseURL: "https://bamboo-theorem-b8d0a.firebaseio.com",
    }
  }
};

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
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
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      "highcharts-more" : "highcharts/highcharts-more.src.js"
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  externals: {
    config: JSON.stringify(environments[process.env.NODE_ENV])
  }
}
