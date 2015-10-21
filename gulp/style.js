var gulp = require('gulp'),
	path = require('path'),
	connect = require('gulp-connect'),
	postcss = require('gulp-postcss'),
	DIST = path.join(__dirname, '../', 'dist'),
	PUBLIC = path.join(__dirname, '../', 'public'),
	style = path.join(PUBLIC, 'app.css');

var postcssImport = require('postcss-import'),
	postcssMixins = require('postcss-mixins'),
	postcssNeat = require('postcss-neat'),
	postcssNested = require('postcss-nested'),
	postcssVars = require('postcss-simple-vars'),
	autoprefixer = require('autoprefixer-core'),
	cssmqpacker = require('css-mqpacker');

var mixins = require('../app/styles/mixins'),
	variables = require('../app/styles/variables');

var processors = [
	postcssImport({ path: ['app/styles', 'node_modules'], glob: true }),
	autoprefixer({ browers: ['last 2 versions', 'IE 9'] }),
	postcssVars({ variables: variables }),
	postcssMixins({ mixins: mixins }),
	postcssNeat({ neatMaxWidth: '70.5625em' }),
	postcssNested,
	cssmqpacker
];

exports.build = function() {
	gulp.src(style)
		.pipe(postcss(processors))
		.on('error', function(err){
			console.log('Style build error: ', err);
		})
		.pipe(gulp.dest(DIST))
		.pipe(connect.reload());
};
