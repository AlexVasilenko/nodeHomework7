require('../../bin/www');
var app = require('../../app');
var request = require('supertest');
var debug = require('debug')('test');
var requestInstance = request(app);

before(function() {
  debug('>>>>>>>>>>>>>Global setup<<<<<<<<<<<<<<<<<<<<<<<');
});

after(function() {
  debug('>>>>>>>>>>>>>Global teardown<<<<<<<<<<<<<<<<<<<<<<<');
});

module.exports.request = requestInstance;
