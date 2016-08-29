/**
 * Generate boilerplate files.
 */
var source = require('vinyl-source-stream');

module.exports = function(gulp) {
  gulp.task('generate:model', function() {
    var stream = source('file.txt');

    stream.end('some data');
    stream.pipe(gulp.dest('output'));
  });
}
