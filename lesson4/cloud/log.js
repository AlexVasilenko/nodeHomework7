var winston = require('winston');

var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({ 'timestamp': true, colorize: true, level: 'debug' }),
    new winston.transports.File({ filename: './logs/cloud.log', level: 'verbose' })
  ]
});

module.exports = logger;
