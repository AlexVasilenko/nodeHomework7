const express = require('express');
const routes = require('./routes');
const SwaggerExpress = require('swagger-express-mw');
const SwaggerUi = require('swagger-tools/middleware/swagger-ui');
const log = require('./log');

const swaggerConfig = {
  appRoot: __dirname // required config
};

const app = express();

SwaggerExpress.create(swaggerConfig, (err, swaggerExpress) => {
  if (err) { throw err; }

  // Add swagger-ui (This must be before swaggerExpress.register)
  app.use(SwaggerUi(swaggerExpress.runner.swagger));
  // install middleware
  swaggerExpress.register(app);
});

app.use(routes);

app.use((err, req, res, next) => {// eslint-disable-line no-unused-vars
  log.error(err);
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;
