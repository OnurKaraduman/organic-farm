var validator = require('validator');
module.exports.isNull = function(param) {
	return validator.isNull(param);
}
module.exports.getDummyMontlyData = function() {
	var monthly = {};
	monthly.January = getRandomNumberForMonth();
	monthly.February = getRandomNumberForMonth();
	monthly.March = getRandomNumberForMonth();
	monthly.April = getRandomNumberForMonth();
	monthly.May = getRandomNumberForMonth();
	monthly.June = getRandomNumberForMonth();
	monthly.July = getRandomNumberForMonth();
	monthly.August = getRandomNumberForMonth();
	monthly.September = getRandomNumberForMonth();
	monthly.October = getRandomNumberForMonth();
	monthly.November = getRandomNumberForMonth();
	monthly.December = getRandomNumberForMonth();
	return monthly;
};
getRandomNumberForMonth = function() {
	return getRandomNumberBetweenNumbers(10, 100);
};
getRandomNumberBetweenNumbers = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};