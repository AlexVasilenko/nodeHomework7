require('../../bin/www');
const app = require('../../app');
const request = require('supertest');
const requestInstance = request(app);

before(function () {
  console.log('Start tests');
});

after(function () {
  console.log('Finish tests');
});

module.exports.request = requestInstance;
