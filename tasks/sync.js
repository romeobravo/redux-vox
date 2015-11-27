/**
 * Sync files to public folder.
 */
var browserify = require('browserify');
var babelify   = require('babelify');
var changed    = require('gulp-changed');
var source     = require('vinyl-source-stream');

module.exports = function(gulp) {
  gulp.task('sync', ['react'], function() {
    return gulp.src(['./assets/**/*.!(coffee|less|scss)', '!assets/images{,/**}'])
      .pipe(changed('public'))
      .pipe(gulp.dest('public'));
  });
};
