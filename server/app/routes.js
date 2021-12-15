const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{ HomeController, 
		PlacingController 
	} = require('./controllers');

module.exports = function(app){	
	app.use('/api', router);
	
	router.get('/test', HomeController.index);
	router.get('/placing', PlacingController.index);
	router.post('/placing', PlacingController.save);
};