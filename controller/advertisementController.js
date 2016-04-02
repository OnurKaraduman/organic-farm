var models = require("../models");
var advertisementRepo = require("../repository/advertisementRepository");
var FieldName = require("../util/constants").FieldName;
var stringUtil = require("../util/stringUtil");

module.exports.save = function(req, res, callback) {
	advertisementRepo.save(callback);
};

module.exports.list = function(req, res, next) {
	advertisementRepo.list(function(err, advertisements) {
		res.generalResponse(err, advertisements);
	});
};

module.exports.details = function(req, res, next) {
	var advertisementId = req.params.id;
	advertisementRepo.details(advertisementId, function(err, advertisement) {
		res.generalResponse(err, advertisement);
	});
};

module.exports.analysis = function(req, res, next) {
	var size = req.query.size;
	var analysis = {
		estimatedProduction : size * 5
	}
	res.generalResponse(null, analysis);
};
module.exports.lastYearAnalysis = function(req, res, next) {
	var lastYearAnalysis = {
		lastYearEstimatedProduct : 20
	}
	res.generalResponse(null, lastYearAnalysis);
};