const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  mode: 'production',
  target: 'electron-renderer',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    bundle: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src')
    ]
  },
  output: {
    filename: '[name].[hash].js'
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html')
    })
  ]
}

module.exports = webpackConfig
