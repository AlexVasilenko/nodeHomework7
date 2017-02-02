module.exports = {
  application: {
    port: 3001
  },
  redis: {
    options: {
      host: 'localhost',
      port: '6379'
    },
    session: {
      prefix: 'session:',
      expires: 60 * 60 * 24 * 30
    }
  }
};
