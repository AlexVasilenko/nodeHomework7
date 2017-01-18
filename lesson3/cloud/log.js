var winston = require('winston');

var logger = new winston.Logger({
    transports: [
      new winston.transports.Console({'timestamp':true}),
      new winston.transports.File({ filename: './logs/cloud.log' })
    ]
});

module.exports = logger;
