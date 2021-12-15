const express = require('express'),
	mongoose = require('mongoose'),
	cookieParser = require('cookie-parser'),
    methodOverride = require('method-override'),
	cors = require('cors'),
	compression = require('compression'),
	app = express();

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('./app/env')[env];

require('./database');

// hack to use async-await in controllers
require('express-async-errors');


app.use(cors());
app.use(methodOverride());
app.use(cookieParser());

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.use(compression());
require('./app/routes')(app);

app.listen(envConfig.port, function(){
  console.log('Server listening on port ' + envConfig.port)
});