var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var tasks = [
  'clean',
  'react',
  'sync',
  'watch',
  'javascript',
  'images',
  'styles',
  'static',
  'generate',
  'webpack'
];
tasks.forEach(function(task) {
  require('./tasks/' + task)(gulp);
});

gulp.task('dev', function() {
  return nodemon({
    script: 'lib/starter.js',
    execMap: {
      js: "node --use_strict"
    },
    ignore: ['public'],
    ext: 'js'
  });
});

gulp.task('default', [
  'webpack',
  'javascript',
  'images',
  'static',
  'styles',
  'dev',
  'watch'
]);
