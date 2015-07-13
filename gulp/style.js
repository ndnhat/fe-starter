var gulp = require('gulp'),
	path = require('path'),
	connect = require('gulp-connect'),
	DIST = path.join(__dirname, '../', 'dist'),
	PUBLIC = path.join(__dirname, '../', 'public'),
	style = path.join(PUBLIC, 'app.css');

exports.build = function() {
	gulp.src(style)
		.pipe(gulp.dest(DIST))
		.pipe(connect.reload());
};
