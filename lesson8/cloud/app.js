const express = require('express');
//const routes = require('./routes');
const config = require('config');
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-tools/middleware/swagger-ui');
const log = require('./log');

const app = express();

const swaggerConfig = config.swagger;
SwaggerExpress.create(swaggerConfig, (err, swaggerExpress) => {
  if (err) { throw err; }
  app.use(SwaggerUi(swaggerExpress.runner.swagger));
  swaggerExpress.register(app);
});

//app.use(routes);

app.use((err, req, res, next) => {// eslint-disable-line no-unused-vars
  log.error(err);
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;
