const path = require('path')
const glob = require('glob')

// -------------------------------------------------------------------------------
// Config

const env = require('gulp-environment')

process.env.NODE_ENV = env.current.name

const conf = (() => {
  const _conf = require('./build-config')
  return require('deepmerge').all([{}, _conf.base || {}, _conf[process.env.NODE_ENV] || {}])
})()

conf.buildPath = path.resolve(__dirname, conf.buildPath)

// -------------------------------------------------------------------------------
// Modules

const gulp = require('gulp')
const webpack = require('webpack')
const sass = require('gulp-sass')
const gutil = require('gulp-util')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const gulpIf = require('gulp-if')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const runSequence = require('run-sequence').use(gulp)

// -------------------------------------------------------------------------------
// Utilities

function getSrc(...src) {
  return src.concat(conf.exclude.map(d => `!${d}/**/*`))
}

// -------------------------------------------------------------------------------
// Clean build directory

gulp.task('clean', function() {
  return del([conf.buildPath], { force: true })
})

// -------------------------------------------------------------------------------
// Build css

gulp.task('build:css', function() {
  return gulp
    .src(getSrc('**/*.scss', '!**/_*.scss'), { base: '.' })

    .pipe(gulpIf(conf.sourcemaps, sourcemaps.init()))
      .pipe(sass({
        outputStyle: conf.minify ? 'compressed' : 'nested'
      }).on('error', sass.logError))
    .pipe(gulpIf(conf.sourcemaps, sourcemaps.write()))

    .pipe(gulpIf(conf.sourcemaps, sourcemaps.init({ loadMaps: true })))
      .pipe(autoprefixer({
        browsers: [ '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie > 9' ]
      }))
    .pipe(gulpIf(conf.sourcemaps, sourcemaps.write()))

    .pipe(gulp.dest(conf.buildPath))
})

// -------------------------------------------------------------------------------
// Build js

gulp.task('build:js', function(cb) {
  setTimeout(function() {
    webpack(require('./webpack.config'), (err, stats) => {
      if (err) {
        gutil.log(gutil.colors.gray('Webpack error:'), gutil.colors.red(err.stack || err))
        if (err.details) gutil.log(gutil.colors.gray('Webpack error details:'), err.details)
        return cb()
      }

      const info = stats.toJson()

      if (stats.hasErrors()) {
        info.errors.forEach(e => gutil.log(gutil.colors.gray('Webpack compilation error:'), gutil.colors.red(e)))
      }

      if (stats.hasWarnings()) {
        info.warnings.forEach(w => gutil.log(gutil.colors.gray('Webpack compilation warning:'), gutil.colors.yellow(w)))
      }

      // Print log
      gutil.log(stats.toString({
        colors: gutil.colors.supportsColor,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: true,
        version: true,
        cached: false,
        cachedAssets: false,
        reasons: false,
        source: false,
        errorDetails: false
      }))

      cb()
    })
  }, 1)
})

// -------------------------------------------------------------------------------
// Build fonts

const FONT_TASKS = [
  { name: 'fontawesome', path: 'node_modules/@fortawesome/fontawesome-free/webfonts/*' },
  { name: 'linearicons', path: 'node_modules/linearicons/dist/web-font/fonts/*' },
  { name: 'pe-icon-7-stroke', path: 'node_modules/pixeden-stroke-7-icon/pe-icon-7-stroke/fonts/*' },
  { name: 'open-iconic', path: 'node_modules/open-iconic/font/fonts/*' },
  { name: 'ionicons', path: 'node_modules/ionicons/dist/fonts/*' }
].reduce(function(tasks, font) {
  const taskName = `build:fonts:${font.name}`

  gulp.task(taskName, () =>
    gulp.src(font.path).pipe(gulp.dest(path.join(conf.buildPath, 'fonts', font.name)))
  )

  return tasks.concat([taskName])
}, [])

// Copy linearicons' style.css
FONT_TASKS.push('build:fonts:linearicons:css')
gulp.task('build:fonts:linearicons:css', function() {
  return gulp
    .src('node_modules/linearicons/dist/web-font/style.css')
    .pipe(replace(/'fonts\//g, '\'linearicons/'))
    .pipe(rename({ basename: 'linearicons' }))
    .pipe(gulp.dest(path.join(conf.buildPath, 'fonts')))
})

gulp.task('build:fonts', FONT_TASKS)

// -------------------------------------------------------------------------------
// Copy

gulp.task('build:copy', function() {
  return gulp
    .src(getSrc('**/*.png', '**/*.gif', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.swf', '**/*.eot', '**/*.ttf', '**/*.woff', '**/*.woff2'), { base: '.' })
    .pipe(gulp.dest(conf.buildPath))
})

// -------------------------------------------------------------------------------
// Watch

gulp.task('watch', function() {
  gulp.watch(getSrc('**/*.scss', '!fonts/**/*.scss'), ['build:css'])
  gulp.watch(getSrc('fonts/**/*.scss'), ['build:css', 'build:fonts'])
  gulp.watch(getSrc('**/*.@(js|es6)'), ['build:js'])
  gulp.watch(getSrc('**/*.png', '**/*.gif', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.swf'), ['build:copy'])
})

// -------------------------------------------------------------------------------
// Build

gulp.task('build', function(cb) {
  runSequence.apply(runSequence, (conf.cleanBuild ? ['clean'] : []).concat([
    ['build:css', 'build:js', 'build:fonts', 'build:copy'],
    cb
  ]))
})
