var config = require('config');
var path = require('path');

module.exports = {
  upload: {
    username: config.username,
    password: config.password,
    file: path.resolve(__dirname, 'dog_pilot.jpg')
  }
};
