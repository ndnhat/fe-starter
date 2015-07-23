var gulp = require('gulp');
var mocha = require('gulp-mocha');

module.exports = function() {
  gulp.src('test/**/*.js')
    .pipe(mocha({ compilers: '.:mocha/compiler.js' }));
};

	