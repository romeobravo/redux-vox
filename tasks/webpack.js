var webpack = require('webpack');
var gutil   = require('gulp-util');

module.exports = function(gulp) {
  gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
      entry: {
        react: './react/lib/main.react.js'
      },
      output: {
        filename: 'public/js/app.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      devtool: 'source-map'
    }, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      // gutil.log("[webpack]", stats.toString({
      //   // output options
      // }));
      callback();
    });
  });
}