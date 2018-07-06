const path = require('path')

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', './app/index.js'],
  devtool: 'cheap-eval-source-map',
  target: 'electron-main',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }  
    ]
  }
}
