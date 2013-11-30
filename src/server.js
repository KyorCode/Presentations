var config = require('./config');
var app = require('./bootstrap')(config).application;
var expressSettings = config.expressSettings;
var logger = require('.infrastructure/log');