var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

gulp.task('styles', function () {
  gulp
    .src('./src/sass/index.scss')
    .pipe(sass())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./assets/css'))
})

gulp.task('default', ['styles'])
