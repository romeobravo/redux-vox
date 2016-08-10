/**
 * Compile React jsx files to bundle.
 */
require('babel-register')
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var gutil      = require('gulp-util');
var beep       = require('beepbeep');
var uglify     = require('uglifyify');

module.exports = function(gulp) {
  gulp.task('react', function() {
    var stream = browserify('./react/lib/main.js', {
      debug: true
    }).transform(babelify, { presets: ["es2015", "react"] })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      // .transform(uglify)
      .pipe(gulp.dest('public/js'))
      .on('error', function(err) {
        gutil.log(err);
        beep();
        this.emit('end');
      });
    return stream;
  });
};
