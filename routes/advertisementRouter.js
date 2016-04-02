var express = require('express');
var router = express.Router();
var controller = require('../controller/advertisementController');
router.get('/:id', controller.details);
router.get('/', controller.list);
router.get('/:id/analysis', controller.analysis);
router.get('/:id/lastanalysis', controller.lastYearAnalysis);
module.exports = router;