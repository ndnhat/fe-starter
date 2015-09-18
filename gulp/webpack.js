var gulp = require('gulp'),
  path = require('path'),
  webpack = require('gulp-webpack'),
  connect = require('gulp-connect'),
  DIST = path.join(__dirname, '../', 'dist'),
  entry = path.join(__dirname, '../', 'app', 'app.js'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = function(watch) {
	watch = watch || false;
  return {
    output: {
      path: DIST,
      filename: '[name].js',
      chunkFilename: '[chunkhash].js'
    },
    devtool: 'eval',
    watch: watch,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader?experimental&optional=runtime']
        }, 
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css', {
        allChunks: true
      })
    ]
  };
};

exports.dev = function() {
  gulp.src(entry)
    .pipe(webpack(webpackConfig(true)))
    .pipe(gulp.dest(DIST))
    .pipe(connect.reload());
};

exports.build = function() {
  gulp.src(entry)
    .pipe(webpack(webpackConfig(false)))
    .pipe(gulp.dest(DIST));
};
