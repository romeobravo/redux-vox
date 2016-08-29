/**
 * Sync static files to public folder.
 */
var changed = require('gulp-changed');

module.exports = function(gulp) {
  gulp.task('javascript', function() {
    return gulp.src('./assets/js/**/*')
      .pipe(changed('.public/js'))
      .pipe(gulp.dest('public/js'));
  });
};
