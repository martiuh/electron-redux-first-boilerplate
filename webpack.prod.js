const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const fs = require('fs')

// I need to find out if the electron app makes some sort of npm install in order to function

const externals = fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`
    return externals
  }, {})

const webpackConfig = {
  externals,
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            comparisons: false
          },
          output: {
            comments: false,
            ascii_only: true
          },
          paralell: true,
          cache: true,
          sourceMap: true
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html')
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ]
}
if (process.env.ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerHo7st: '7001'
  }))
}

module.exports = webpackConfig
