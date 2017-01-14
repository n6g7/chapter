const environments = {
  production: {
    googleApiKey: 'AIzaSyCGJLle1uZO6BzHvdYdwY7JEHuHoz8Av-s'
  }
};

module.exports = {
  entry: './src/index.jsx',
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
  resolve: {
    extensions: ['', '.js', '.jsx']
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
