var fs = require('fs');
var agent = require('superagent');

var CLOUD_URL = 'localhost:3000/upload';

module.exports = {
  upload: postFileToCloud
};

function postFileToCloud(file, username, password, cb) {
  fs.stat(file, function(err, stats){
    if (err) {
      return cb(err);
    }
    console.log('Trying to sync file', file, 'with size', stats.size);
    agent
      .post(CLOUD_URL)
      .auth(username, password)
      .type('form')
      .on('progress', function(e) {
        var percentDone = Math.floor((e.loaded / e.total) * 100);
        console.log('Percentage done: ', percentDone);
      })
      .attach('syncfile', file)
      .set('Accept', 'application/json')
      .end(cb);
  });
}
