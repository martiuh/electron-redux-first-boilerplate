const path = require('path')

const webpackConfig = {
  mode: 'production'
  target: 'node',
  entry: {
    bundle: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: []
}

module.exports = webpackConfig
