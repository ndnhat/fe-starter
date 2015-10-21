'use strict';

//Create mixins below

//Test mixin
var specialFont = function(mixin) {
	return {
		'font-family': 'sans-serif',
		'font-style': 'normal',
		'font-weight': 400,
		'-webkit-font-smoothing': 'antialiased',
		'-moz-osx-font-smoothing': 'grayscale',
	};
};
//End test mixin


//Export mixins below
module.exports = {
  'special-font' : specialFont
};
