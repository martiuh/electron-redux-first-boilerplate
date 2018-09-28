const { HotModuleReplacementPlugin, NamedModulesPlugin, NoEmitOnErrorsPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')
const path = require('path')

const port = 7000
const publicPath = `http://localhost:${port}/dist`

const webpackConfig = {
  devtool: 'eval-source-map',
  mode: 'development',
  target: 'electron-renderer',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    publicPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new HotModuleReplacementPlugin({
      multiStep: true
    }),
    new NamedModulesPlugin(),
    new NoEmitOnErrorsPlugin()
  ],
  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
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
      if (!process.env.WEB) {
        spawn('npm', ['run', 'electron'], {
          shell: true,
          env: process.env,
          stdio: 'inherit'
        })
        .on('close', code => process.exit(code))
        .on('error', spawnErr => console.error(spawnErr))
      }
    }
  }
}

module.exports = webpackConfig
