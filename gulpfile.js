'use strict';
require('babel/register');

var gulp = require('gulp'),
  clean = require('./gulp/clean'),
  connect = require('./gulp/connect'),
  copy = require('./gulp/copy'),
  style = require('./gulp/style'),
  test = require('./gulp/test'),
  watch = require('./gulp/watch'),
  webpack = require('./gulp/webpack');

gulp.task('clean', clean);
gulp.task('copy:html', copy.html);
gulp.task('copy:public', copy.public);
gulp.task('style:build', style.build);
gulp.task('webpack:build', webpack.build);
gulp.task('webpack:dev', webpack.dev);
gulp.task('connect:start', connect);
gulp.task('test', test);
gulp.task('watch', watch);

gulp.task('dev', [
	'clean',
	'copy:public',
	'webpack:dev',
	'connect:start',
	'watch'
]);

gulp.task('build', [
  'clean',
  'copy:public',
  'webpack:build'
]);

gulp.task('dev:watch', ['webpack:dev', 'watch']);
gulp.task('default', ['dev']);