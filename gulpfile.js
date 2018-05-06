var gulp = require('gulp');
var bookmarklet = require('gulp-bookmarklet');
var rename = require('gulp-rename');
var generateTemplate = require('gulp-template-generator');
var sass = require('gulp-sass');

gulp.task('default', function(callback) {
  gulp.watch(['src/bookmarklet.js'], ['scripts']);
  gulp.watch(['server/styles/style.scss'], ['styles']);
})

gulp.task('scripts', function() {
  gulp.src('src/bookmarklet.js')
    .pipe(bookmarklet())
    .pipe(gulp.dest('dist/'))
})

gulp.task('styles', function() {
  gulp.src('server/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('server/styles/'))
})
