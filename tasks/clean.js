var del  = require('del');

module.exports = function(gulp) {
  gulp.task('clean:dev', function () {
    return del('public');
  });
  gulp.task('clean:prod', function () {
    return del('www');
  });
}
