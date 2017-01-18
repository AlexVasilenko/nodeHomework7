var express = require('express');
var routes = require('./routes');
var log = require('./log');

var app = express();

app.use(routes);

app.use(function(err, req, res, next) {
  log.error(err);
  res.status(err.status || err.code || 500);
  res.json(err.message);
});

module.exports = app;
