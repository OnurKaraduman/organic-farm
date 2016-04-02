var models = require("../models");
var advertisementRepo = require("../repository/advertisementRepository");
var FieldName = require("../util/constants").FieldName;
var stringUtil = require("../util/stringUtil");

module.exports.save = function(req, res, callback) {
	advertisementRepo.save(callback);
};

module.exports.list = function(req, res, next) {
	advertisementRepo.list(function(err, advertisements){
		res.generalResponse(err, advertisements);
	});
};

module.exports.details = function(req, res, next){
	var advertisementId = req.params.id;
	advertisementRepo.details(advertisementId, function(err, advertisement){
		res.generalResponse(err, advertisement);
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