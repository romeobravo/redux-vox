var nodemon = require('gulp-nodemon');

module.exports = function(gulp) {
  gulp.task('node-server', function() {
    return nodemon({
      script: 'lib/starter.js',
      execMap: {
        js: "node --use_strict"
      },
      ignore: ['public'],
      ext: 'js'
    });
  });
}