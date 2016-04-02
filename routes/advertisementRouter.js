var express = require('express');
var router = express.Router();
var controller = require('../controller/advertisementController');
router.get('/:id', controller.details);
router.get('/', controller.list);
router.get('/analysis/:id', controller.analysis);
router.get('/lastanalysis/:id', controller.lastYearAnalysis);
module.exports = router;