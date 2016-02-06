var webpack = require('webpack');
var gutil   = require('gulp-util');
var path    = require('path');

module.exports = function(gulp) {
  gulp.task("webpack", function(callback) {
    webpack({
      entry: {
        react: './react/lib/main.react.js',
        vendor: ['react'],
      },
      output: {
        filename: 'public/js/app.js'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react'],
              plugins: ['transform-async-to-generator']
            }
          }
        ]
      },
      devtool: 'source-map',
      resolve: {
        extensions: [ '', '.js', '.jsx' ],
        fallback: path.join(__dirname, '../node_modules')
      },
      resolveLoader: {
        root: path.join(__dirname, '../node_modules')
      },
      plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'public/js/  vendor.app.js')
      ]
    }, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
        // output options
      }));
      callback();
    });
  });
}