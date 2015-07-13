var gulp = require('gulp'),
	path = require('path'),
	STYLES = path.join(__dirname, '../', 'public'),
	index = path.join(__dirname, '../', 'public', 'index.html');

module.exports = function() {
	gulp.watch(index, ['copy:html']);
	gulp.watch(path.join(STYLES, 'app.css'), ['style:build']);
};
