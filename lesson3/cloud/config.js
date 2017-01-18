var env = process.env.NODE_ENV || 'development';
var defaultConfig = require('./config/default');
var envConfig = require('./config/' + env);

var config = Object.assign({}, defaultConfig, envConfig);

module.exports = config;
