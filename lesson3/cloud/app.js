var express = require('express');
var routes = require('./routes');

var app = express();

app.use(routes);

app.use(function(err, req, res, next) {
  console.log('err', err);
  res.status(err.status || err.code || 500);
  res.json(err.message);
});

module.exports = app;
