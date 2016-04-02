var express = require('express');
var models = require('./models');
var appConfig = require('./config/appConfig.js');

var app = express();

require("./core/express")(app);
var port = process.env.PORT || 3000;
models.sequelize.sync().then(
		function() {
			var server = app.listen(port, function() {
				console.log('Express server listening on port '
						+ server.address().port);
			});
		});