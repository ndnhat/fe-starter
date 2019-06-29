'use strict';

//Create mixins below

//Test mixin
var specialFont = function(mixin, weight) {
	return {
		'font-family': 'sans-serif',
		'font-style': 'normal',
		'font-weight': weight,
		'-webkit-font-smoothing': 'antialiased',
		'-moz-osx-font-smoothing': 'grayscale',
	};
};
//End test mixin


//Export mixins below
module.exports = {
  'special-font' : specialFont
};
