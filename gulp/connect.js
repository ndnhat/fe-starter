var gulp = require('gulp'),
	path = require('path'),
	connect = require('gulp-connect'),
	open = require('gulp-open'),
	historyApiFallback = require('connect-history-api-fallback'),
	DIST = path.join(__dirname, '../', 'dist'),
	index = path.join(DIST, 'index.html');

module.exports = function() {
	connect.server({
		root: DIST,
		livereload: true,
		middleware: function(connect, opt) {
			return [historyApiFallback];
		}
	});
	gulp.src(index)
		.pipe(open('', {
			url: 'http://localhost:8080'
		}));
};
