/**
 * Watch files.
 */

module.exports = function(gulp) {
  gulp.task('watch', function() {
    // gulp.watch('react/**/*.js', ['webpack']);
    // gulp.watch('node_modules/vox-router/**/*.js', ['webpack']);
    gulp.watch('assets/images/**/*', ['images']);
    gulp.watch('assets/*', ['static']);
    // gulp.watch('assets/js/**/*', ['javascript']);
    // gulp.watch('assets/styles/**/*', ['styles']);
  });
};
