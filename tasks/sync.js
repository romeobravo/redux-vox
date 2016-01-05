/**
 * Sync files to public folder.
 */
var babelify   = require('babelify');
var changed    = require('gulp-changed');
var source     = require('vinyl-source-stream');

module.exports = function(gulp) {
  gulp.task('sync', ['webpack'], function() {
    return gulp.src(['./assets/**/*.!(coffee|less|scss)', '!assets/images{,/**}'])
      .pipe(changed('public'))
      .pipe(gulp.dest('public'));
  });
};
