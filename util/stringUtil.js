var validator = require('validator');
module.exports.isNull = function(param) {
	return validator.isNull(param);
}
