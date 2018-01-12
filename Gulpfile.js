var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

gulp.task('styles', function () {
  gulp
    .src('./src/sass/index.scss')
    .pipe(sass())
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

gulp.task('default', ['styles', 'assets'])
