'use strict';

const fs = require('fs');
const log = require('../log');

const FILES_LIST_PATH = './filesList';
const FILERECORDSPLITTER = '\n';
const UPLOAD_DESTINATION = 'uploads-default/';
let filesList = [];

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
  if (filesList.includes(filePath)) {
    console.log('duplicate');
    cb(null, false);
  } else {
    console.log('not duplicate');
    saveToFileList(filePath, function(err) {
      cb(err, true);
    });
  }
}

function saveToFileList(filePath, cb) {
  try {
    filesList.push(filePath);
    const fileRecord = filePath + FILERECORDSPLITTER;
    console.log('trying to append file', FILES_LIST_PATH, fileRecord);
    fs.appendFileSync(FILES_LIST_PATH, fileRecord);
  } catch (err) {
    return cb(err);
  }
  log.debug('File saved to list', filePath);
  return cb();
}


module.exports = {
  dest: UPLOAD_DESTINATION,
  fileFilter: fileFilter
};
