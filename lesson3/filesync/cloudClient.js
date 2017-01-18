var fs = require('fs');
var agent = require('superagent');
var ProgressBar = require('ascii-progress');

var CLOUD_URL = 'localhost:3000/upload';

module.exports = {
  upload: postFileToCloud
};

function postFileToCloud(file, username, password, cb) {
  fs.stat(file, function(err, stats){//TO-DO: bluebird promisify
    if (err) {
      return cb(err);
    }
    console.log('Trying to sync file', file, 'with size', stats.size);
    var bar = new ProgressBar({
        schema: 'uploading [:bar] :percent',
        total: 100,
        width: 20
    });
    var fileStream = fs.createReadStream(file);
    agent
      .post(CLOUD_URL)
      .auth(username, password)
      .type('form')
      .on('progress', function(e) {
        var percentDone = Math.floor((e.loaded / e.total) * 100);
        bar.tick(percentDone);
      })
      .attach('syncfile', fileStream)
      .set('Accept', 'application/json')
      .end(cb);
  });
}
