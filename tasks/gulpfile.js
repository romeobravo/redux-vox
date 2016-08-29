var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var tasks = [
  'clean',
  'sync',
  'watch',
  'javascript',
  'images',
  'styles',
  'static',
  'generate',
  // 'webpack',
  'webpack-dev-server'
];
tasks.forEach(function(task) {
  require('./' + task)(gulp);
});

gulp.task('dev', function() {
  return nodemon({
    script: 'lib/boot.js',
    execMap: {
      js: "node --use_strict"
    },
    ignore: ['public'],
    ext: 'js'
  });
});

gulp.task('default', [
  'webpack-dev-server',
  'javascript',
  'images',
  'static',
  'dev',
  'watch'
]);
