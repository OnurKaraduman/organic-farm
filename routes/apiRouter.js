var express = require('express');
var router = express.Router();
var ApiUtil = require('../util/apiUtil');
var UserAuth = require('../middleware/userApiAuth');
var UserRouter = require('./userRouter');
var userContr = require('../controller/userController');
var advertismentRouter = require('./advertisementRouter');

// custom response methods
router.use('/*', ApiUtil.addServisistResponseMethods);

router.post('/users', userContr.signup);

router.use('/*', UserAuth.authenticate);
router.use('/users', UserRouter);
router.use('/advertisements', advertismentRouter);
module.exports = router;