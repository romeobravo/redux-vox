var dotenv           = require('dotenv').load();
var gulp             = require("gulp");
var gutil            = require("gulp-util");
var webpack          = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var path             = require('path');
var autoprefixer     = require('autoprefixer');

module.exports = function(gulp) {
  gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack({
      entry: {
        vox: [
          'webpack-dev-server/client?http://localhost:8080',
          'webpack/hot/dev-server',
          './react/lib/main.js',
          './assets/styles/main.scss'
        ],
        vendor: [
          './react/lib/vendor.js'
        ]
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js'),
        publicPath: 'http://localhost:8080/public/'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'jsx', 'babel?sourceMaps']
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          }
        ]
      },
      postcss: function() {
        return [autoprefixer]
      },
      devtool: 'source-map',
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
      ]
    });

    new WebpackDevServer(compiler, {
      publicPath: "http://localhost:8080/public",
      hot: true,
      noCredentials: true,
      inline: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    }).listen(8080, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      // Server listening
      gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

      // keep the server alive or continue?
      // callback();
    });
  });
}
