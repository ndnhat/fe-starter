var path = require('path'),
	del = require('del'),
	DIST = path.join(__dirname, '../', 'dist');

module.exports = function(done) {
	del.sync([DIST]);
	done();
};
