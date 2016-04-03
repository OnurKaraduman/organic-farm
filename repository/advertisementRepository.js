var models = require('../models');
var FieldName = require("../util/constants").FieldName;

module.exports.save = function(advertisementToBeCreated, callback) {
	models.Advertisement.create(advertisementToBeCreated).then(
			function(advertisement) {
				return callback(null, advertisement);
			});
};

module.exports.list = function(callback) {
	models.Advertisement.findAll(
			{
				attributes : [ 'id', 'area', 'productType', 'seedDate',
						'harvestDate', ]
			}).then(function(advertisements) {
		return callback(null, advertisements);
	});
};

module.exports.details = function(advertisementId, callback) {
	models.Advertisement.findOne({
		include : [ {
			model : models.User,
		} ],
		where : {
			id : advertisementId
		}
	}).then(function(advertisement) {
		return callback(null, advertisement);
	});
};

module.exports.analysis = function(advertisement, size, callback) {
	var Analysis = {
		estimatedProduction : size * 5
	}
	return callback(null, Analysis);
};
module.exports.lastYearAnalysis = function(advertisement, callback) {
	var lastYearAnalysis = {
		lastYearEstimatedProduct : 20
	}
};
