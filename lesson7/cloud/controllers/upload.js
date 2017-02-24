var multer  = require('multer');
var fs = require('fs');
var config = require('config');
var log = require('../log');
const co = require('co');
const filelist = require('./filelist');

var uploadMiddleware = multer({
  dest: config.uploadDestination,
  fileFilter: fileFilter
});

var FILES_LIST_PATH = config.filesListPath;
var FILERECORDSPLITTER = config.filesRecordSplitter;
var filesList = [];

try {
  filesList = fs
    .readFileSync(FILES_LIST_PATH, 'utf8')
    .trim()
    .split(FILERECORDSPLITTER);
  log.info('FileList loaded at start');
} catch (err) {
  log.info('No fileList found at start');
}

function fileFilter(req, file, cb) {
  const filePath = req.query.filePath;
  co(filesList.filePathFilter(filePath))
  .then ( res => {
      cb(null, res);
  })
  .catch( err => {
    cb(err, true);
  });
}

function validateRequest() {
  return function(req, res, next) {
    var filePath = req.query.filePath;
    if (!filePath) {
      var err = new Error('Validation error: filePath parameter is missing', 400);
      return next(err);
    }
    next();
  };
}

function saveToFileList(filePath, cb) {
  try {
    filesList.push(filePath);
    var fileRecord = filePath + FILERECORDSPLITTER;
    fs.appendFileSync(FILES_LIST_PATH, fileRecord);
  } catch (err) {
    return cb(err);
  }
  log.debug('File saved to list', filePath);
  return cb();
}
module.exports = {
  parse: uploadMiddleware,
  validate: validateRequest
};
