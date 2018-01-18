var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var cleanCSS = require('gulp-clean-css')
var babel = require('babelify')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('styles', function () {
  gulp
    .src('./src/sass/index.scss')
    .pipe(sass())
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log('\nMinfyCSS Details >>>>>>>>>>>>>>>>>>>')
      console.log(`${details.name}: ${Math.round(details.stats.originalSize / 1024)} KB`)
      console.log(`${details.name}: ${Math.round(details.stats.minifiedSize / 1024)} KB`)
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('assets', function () {
  gulp
    .src('assets/images/*')
    .pipe(gulp.dest('public/images'))

  gulp
    .src('assets/favicon/*')
    .pipe(gulp.dest('public/favicon'))
})

gulp.task('font-awesome', function () {
  gulp
    .src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'))

  gulp
    .src('./node_modules/font-awesome/scss/font-awesome.scss')
    .pipe(sass())
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log('\nMinfyCSS Details >>>>>>>>>>>>>>>>>>>')
      console.log(`${details.name}: ${Math.round(details.stats.originalSize / 1024)} KB`)
      console.log(`${details.name}: ${Math.round(details.stats.minifiedSize / 1024)} KB`)
    }))
    .pipe(rename('font-awesome.css'))
    .pipe(gulp.dest('./public/css'))
})

function compile (watch) {
  var bundle

  function rebundle () {
    bundle
      .transform(babel)
      .bundle()
      .pipe(source('index.js'))
      /* .pipe(buffer())
      .pipe(uglify()) */
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }

  if (watch) {
    bundle = watchify(browserify('./src/index.js'))

    bundle.on('update', function () {
      console.log('--> Bundling...')
      rebundle()
    })
  } else {
    bundle = browserify('./src/index.js')
  }

  rebundle()
}

gulp.task('default', ['styles', 'assets', 'build', 'font-awesome'])

gulp.task('build', function () { return compile() })

gulp.task('watch', function () { return compile(true) })
