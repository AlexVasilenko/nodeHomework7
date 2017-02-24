module.exports = {
  application: {
    port: 3000
  },
  uploadDestination: 'uploads-default/',
  filesListPath: './filesList',
  filesRecordSplitter: '\n',
  services: {
    authN: {
      host: 'http://127.0.0.1:3001'
    }
  },
  redisOptions: {
    host: 'localhost',
    port: '6379'
  }
};
