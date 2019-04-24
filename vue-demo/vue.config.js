const path = require('path')
const RenameWebpackPlugin = require('rename-webpack-plugin')
const SuppressChunksPlugin = require('suppress-chunks-webpack-plugin').default
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const STYLES = {
  'vendor/appwork': './src/vendor/styles/rtl/appwork.scss',
  'vendor/appwork-material': './src/vendor/styles/rtl/appwork-material.scss',
  'vendor/bootstrap': './src/vendor/styles/rtl/bootstrap.scss',
  'vendor/bootstrap-material': './src/vendor/styles/rtl/bootstrap-material.scss',
  'vendor/colors': './src/vendor/styles/rtl/colors.scss',
  'vendor/colors-material': './src/vendor/styles/rtl/colors-material.scss',
  'vendor/uikit': './src/vendor/styles/rtl/uikit.scss',
  'vendor/theme-air': './src/vendor/styles/rtl/theme-air.scss',
  'vendor/theme-air-material': './src/vendor/styles/rtl/theme-air-material.scss',
  'vendor/theme-corporate': './src/vendor/styles/rtl/theme-corporate.scss',
  'vendor/theme-corporate-material': './src/vendor/styles/rtl/theme-corporate-material.scss',
  'vendor/theme-cotton': './src/vendor/styles/rtl/theme-cotton.scss',
  'vendor/theme-cotton-material': './src/vendor/styles/rtl/theme-cotton-material.scss',
  'vendor/theme-gradient': './src/vendor/styles/rtl/theme-gradient.scss',
  'vendor/theme-gradient-material': './src/vendor/styles/rtl/theme-gradient-material.scss',
  'vendor/theme-paper': './src/vendor/styles/rtl/theme-paper.scss',
  'vendor/theme-paper-material': './src/vendor/styles/rtl/theme-paper-material.scss',
  'vendor/theme-shadow': './src/vendor/styles/rtl/theme-shadow.scss',
  'vendor/theme-shadow-material': './src/vendor/styles/rtl/theme-shadow-material.scss',
  'vendor/theme-soft': './src/vendor/styles/rtl/theme-soft.scss',
  'vendor/theme-soft-material': './src/vendor/styles/rtl/theme-soft-material.scss',
  'vendor/theme-sunrise': './src/vendor/styles/rtl/theme-sunrise.scss',
  'vendor/theme-sunrise-material': './src/vendor/styles/rtl/theme-sunrise-material.scss',
  'vendor/theme-twitlight': './src/vendor/styles/rtl/theme-twitlight.scss',
  'vendor/theme-twitlight-material': './src/vendor/styles/rtl/theme-twitlight-material.scss',
  'vendor/theme-vibrant': './src/vendor/styles/rtl/theme-vibrant.scss',
  'vendor/theme-vibrant-material': './src/vendor/styles/rtl/theme-vibrant-material.scss'
}

module.exports = {
  transpileDependencies: [
    /\bvue-echarts\b/,
    /\bresize-detector\b/,
    /\bvue-c3\b/,
    /\bvue-masonry\b/,
    /\bvue-cropper\b/
  ],
  chainWebpack: config => {
    // Add "node_modules" alias
    config.resolve.alias
      .set('node_modules', path.join(__dirname, './node_modules'))

    // Add styles to entry points
    Object.keys(STYLES).forEach(k => {
      config.entry(k)
        .add(STYLES[k])
    })

    // Disable "prefetch" plugin since it's not properly working in some browsers
    config.plugins
      .delete('prefetch')

    // Do not inject "vendor" assets
    config.plugin('html')
      .tap(args => {
        args[0].excludeAssets = [/[/\\]vendor[/\\]/]
        return args
      })

    // Do not remove whitespaces
    config.module.rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })

    // Add exclude assets plugin
    config.plugin('html-exclude-assets')
      .use(HtmlWebpackExcludeAssetsPlugin)

    // Non-production config
    if (process.env.NODE_ENV !== 'production') {
      // Exclude vendor styles (except page styles) from the default SCSS rule
      config.module.rule('scss')
        .test(/^(?!.*?vendor[/\\]styles[/\\]).*?\.scss$|vendor[/\\]styles[/\\]pages[/\\].*?\.scss$/)

      // Create a rule for handling vendor styles. Do not include page styles
      config.module.rule('vendor-css')
        .test(/^.*?vendor[/\\]styles[/\\](?!.*?pages[/\\]).*?\.scss$/)
        .use('extract-css-loader').loader(MiniCssExtractPlugin.loader).options({
          publicPath: '../'
        }).end()
        .use('css-loader').loader('css-loader').options({
          sourceMap: false,
          importLoaders: 2
        }).end()
        .use('postcss-loader').loader('postcss-loader').options({
          sourceMap: false
        }).end()
        .use('sass-loader').loader('sass-loader').options({
          sourceMap: false
        })

      // Add extract-vendor-css plugin
      config.plugin('extract-vendor-css')
        .use(MiniCssExtractPlugin, [{
          filename: 'css/[name].css',
          chunkFilename: 'css/[name].css'
        }])

    // Production config
    } else {
      // Do not generate .js files for stylesheets
      config.plugin('suppress-chunks')
        .use(SuppressChunksPlugin, [
          Object.keys(STYLES),
          { filter: /\.js(?:\.map)?$/ }
        ])

      // Rename vendor styles to remove hashes from their names
      config.plugin('rename-chunks')
        .use(RenameWebpackPlugin, [{
          originNameReg: /(appwork(?:-material)?|bootstrap(?:-material)?|colors(?:-material)?|uikit|theme-[^.]+)\..*?\.css$/,
          targetName: '$1.css'
        }])
    }
  }
}
