/// <binding ProjectOpened='watch' />
const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

// Make paths absolute
const p = function(...paths) {
  return [].concat(paths).map(p_ =>
    p_.indexOf('!') === 0 ?
      '!' + path.join(__dirname, p_.slice(1))
      : path.join(__dirname, p_)
  )
}

function buildSass(...paths) {
  return gulp
    .src(p(...paths), { base: 'wwwroot' })
    .pipe(plumber({ errorHandler: function(err) {
      notify.onError({
        title: "Gulp error in " + err.plugin,
        message: err.toString()
      })(err)
    }}))

    .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'nested'
      }).on('error', sass.logError))
    .pipe(sourcemaps.write())

    .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(autoprefixer({
        browsers: [ '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie > 9' ]
      }))
    .pipe(sourcemaps.write())

    .pipe(gulp.dest('wwwroot'))

    .pipe(cleanCSS())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('wwwroot'))
}

gulp.task('build:js', function() {
  return gulp
    .src(p('wwwroot/**/*.js', '!wwwroot/**/*.es5.js', '!wwwroot/**/*.min.js', '!wwwroot/vendor/**/*.js'), { base: 'wwwroot' })
    .pipe(plumber({ errorHandler: function(err) {
      notify.onError({
        title: "Gulp error in " + err.plugin,
        message:  err.toString()
      })(err)
    }}))

    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: [
          [
            '@babel/preset-env', {
              targets: {
                browsers: [ '> 1%', 'last 2 versions', 'not ie <= 9' ]
              }
            }
          ]
        ]
      }))
      .pipe(rename({extname: '.es5.js'}))
    .pipe(sourcemaps.write())

    .pipe(gulp.dest('wwwroot'))

    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('wwwroot'))
})

gulp.task('build:sass', function() {
  return buildSass('wwwroot/**/*.scss', '!wwwroot/**/_*.scss', '!wwwroot/vendor/**/*.scss')
})

gulp.task('build:vendor:sass', function() {
  return buildSass('wwwroot/vendor/css/**/*.scss', '!wwwroot/vendor/css/**/_*.scss')
})

gulp.task('build:vendor:libs', function() {
  return buildSass('wwwroot/vendor/libs/**/*.scss', '!wwwroot/vendor/libs/**/_*.scss')
})

gulp.task('build:all', ['build:sass', 'build:js', 'build:vendor:sass', 'build:vendor:libs'])

gulp.task('watch', function() {
  gulp.watch(p('wwwroot/**/*.scss', '!wwwroot/vendor/**/*.scss', 'wwwroot/vendor/css/_custom-variables/*.scss', 'wwwroot/vendor/css/_appwork/_variables*.scss'), ['build:sass'])
  gulp.watch(p('wwwroot/vendor/css/**/*.scss'), ['build:vendor:sass'])
  gulp.watch(p('wwwroot/vendor/libs/**/*.scss', 'wwwroot/vendor/css/_custom-variables/*.scss', 'wwwroot/vendor/css/_appwork/_variables*.scss'), ['build:vendor:libs'])
  gulp.watch(p('wwwroot/**/*.js', '!wwwroot/**/*.es5.js', '!wwwroot/**/*.min.js', '!wwwroot/vendor/**/*.js'), ['build:js'])
})

gulp.task('default', ['build:all'])
