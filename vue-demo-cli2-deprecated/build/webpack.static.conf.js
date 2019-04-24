'use strict'

const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const config = require('../config')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const env = process.env.NODE_ENV === 'production' ? config.build.env : config.dev.env

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const loaderOptions = {
  minimize: process.env.NODE_ENV === 'production',
  sourceMap: process.env.NODE_ENV === 'production' ? config.build.productionSourceMap : config.dev.cssSourceMap
}
const assetsRoot = config.build.assetsRoot
const publicPath = process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
const filename = process.env.NODE_ENV === 'production' ? '[name].css' : '[name].js'

const webpackConfig = {
  entry: {
    'appwork': './src/vendor/styles/rtl/appwork.scss',
    'appwork-material': './src/vendor/styles/rtl/appwork-material.scss',
    'bootstrap': './src/vendor/styles/rtl/bootstrap.scss',
    'bootstrap-material': './src/vendor/styles/rtl/bootstrap-material.scss',
    'colors': './src/vendor/styles/rtl/colors.scss',
    'colors-material': './src/vendor/styles/rtl/colors-material.scss',
    'uikit': './src/vendor/styles/rtl/uikit.scss',
    'theme-air': './src/vendor/styles/rtl/theme-air.scss',
    'theme-air-material': './src/vendor/styles/rtl/theme-air-material.scss',
    'theme-corporate': './src/vendor/styles/rtl/theme-corporate.scss',
    'theme-corporate-material': './src/vendor/styles/rtl/theme-corporate-material.scss',
    'theme-cotton': './src/vendor/styles/rtl/theme-cotton.scss',
    'theme-cotton-material': './src/vendor/styles/rtl/theme-cotton-material.scss',
    'theme-gradient': './src/vendor/styles/rtl/theme-gradient.scss',
    'theme-gradient-material': './src/vendor/styles/rtl/theme-gradient-material.scss',
    'theme-paper': './src/vendor/styles/rtl/theme-paper.scss',
    'theme-paper-material': './src/vendor/styles/rtl/theme-paper-material.scss',
    'theme-shadow': './src/vendor/styles/rtl/theme-shadow.scss',
    'theme-shadow-material': './src/vendor/styles/rtl/theme-shadow-material.scss',
    'theme-soft': './src/vendor/styles/rtl/theme-soft.scss',
    'theme-soft-material': './src/vendor/styles/rtl/theme-soft-material.scss',
    'theme-sunrise': './src/vendor/styles/rtl/theme-sunrise.scss',
    'theme-sunrise-material': './src/vendor/styles/rtl/theme-sunrise-material.scss',
    'theme-twitlight': './src/vendor/styles/rtl/theme-twitlight.scss',
    'theme-twitlight-material': './src/vendor/styles/rtl/theme-twitlight-material.scss',
    'theme-vibrant': './src/vendor/styles/rtl/theme-vibrant.scss',
    'theme-vibrant-material': './src/vendor/styles/rtl/theme-vibrant-material.scss'
  },
  output: {
    path: path.posix.join(assetsRoot, utils.assetsPath('vendor/styles')),
    publicPath: path.posix.join(publicPath, utils.assetsPath('vendor/styles')),
    filename: filename
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: loaderOptions.minimize,
            sourceMap: loaderOptions.sourceMap
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: loaderOptions.sourceMap
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: loaderOptions.sourceMap
          }
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
  ],
  resolve: {
    extensions: ['.scss', '.css', '.js', '.json'],
    alias: {
      '@': resolve('src'),
      'node_modules': resolve('node_modules')
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = config.build.productionSourceMap ? config.build.devtool : false

  webpackConfig.plugins.push(
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    })
  )

  if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          config.build.productionGzipExtensions.join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
  }
} else {
  webpackConfig.devtool = config.dev.devtool
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  webpackConfig.plugins.push(new webpack.NamedModulesPlugin())
  webpackConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin())
}

if (process.env.NODE_ENV === 'development') {
  const portfinder = require('portfinder')

  module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
      if (err) {
        reject(err)
      } else {
        // Add FriendlyErrorsPlugin
        webpackConfig.plugins.push(new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here: http://${HOST || config.dev.host}:${port}`],
          },
          onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
        }))

        resolve(webpackConfig)
      }
    })
  })
} else {
  module.exports = webpackConfig
}
