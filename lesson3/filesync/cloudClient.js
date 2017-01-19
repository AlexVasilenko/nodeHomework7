var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var agent = require('superagent');
var ProgressBar = require('ascii-progress');

var CLOUD_URL = 'localhost:3000/upload';

module.exports = {
  upload: postFileToCloud
};

function postFileToCloud(filePath, username, password, cb) {
  return fs.statAsync(filePath)
    .then(stats => {
      console.log('Trying to sync file', filePath, 'with size', stats.size);
      var bar = new ProgressBar({
          schema: 'uploading [:bar] :percent',
          total: 100,
          width: 20
      });
      var fileStream = fs.createReadStream(filePath);
      var uploadUrl = generateUploadUrl(filePath);
      return agent
        .post(uploadUrl)
        .auth(username, password)
        .type('form')
        .on('progress', function(e) {
          var percentDone = Math.floor((e.loaded / e.total) * 100);
          bar.tick(percentDone);
        })
        .attach('syncfile', fileStream)
        .set('Accept', 'application/json');
    });
}

function generateUploadUrl(filePath) {
  var filePathQuery = encodeURI(path.resolve(filePath));
  console.log('filePathQuery generated', filePathQuery);
  return CLOUD_URL + '?filePath=' + filePathQuery;
}
