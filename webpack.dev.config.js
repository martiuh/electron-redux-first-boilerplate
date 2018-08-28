const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

const port = 7000
const publicPath = `http://localhost:${port}/dist/`

const webpackConfig = {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'node',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src')
  ],
  output: {
    publicPath,
    filename: 'bundle.dev.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    port,
    publicPath,
    hot: true,
  	headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false
    },
    before() {
      spawn('npm', ['run', 'electron'], {
        shell: true,
        env: process.env,
        stdio: 'inherit'
      })
      .on('close', code => process.exit(code))
      .on('error', spawnErr => console.error(spawnErr))
    }
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ]
}

module.exports = webpackConfig
