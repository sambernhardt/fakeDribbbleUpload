var gulp = require('gulp');
var bookmarklet = require('gulp-bookmarklet');

gulp.task('default', function(callback) {
  gulp.watch(['src/bookmarklet.js'], ['scripts']);
})

gulp.task('scripts', function() {
  gulp.src('src/bookmarklet.js')
    .pipe(bookmarklet())
    .pipe(gulp.dest('dist/'))
})
