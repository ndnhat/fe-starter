var gulp = require('gulp'),
	path = require('path'),
	connect = require('gulp-connect'),
	DIST = path.join(__dirname, '../', 'dist'),
	PUBLIC = path.join(__dirname, '../', 'public'),
	index = path.join(PUBLIC, 'index.html');

exports.html = function() {
	gulp.src(index)
		.pipe(gulp.dest(DIST))
		.pipe(connect.reload());
};

exports.public = function() {
	gulp.src(path.join(PUBLIC, '/**/*'), {
		base: PUBLIC
	})
		.pipe(gulp.dest(DIST));
};
