const liveReload = require('webpack-livereload-plugin')
const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')

const webpackConfig = {
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
  devServer: {
  	contentBase: path.join(__dirname),
  	compress: true,
  	port: 3000,
  },
  plugins: [
    // new liveReload()
    new HotModuleReplacementPlugin()
  ]
}

module.exports = webpackConfig
