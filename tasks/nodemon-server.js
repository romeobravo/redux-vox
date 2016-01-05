var nodemon = require('gulp-nodemon');

module.exports = function() {
  return nodemon({
    script: '../lib/starter.js',
    execMap: {
      js: "node --use_strict"
    },
    ignore: ['public'],
    ext: 'js'
  });
}