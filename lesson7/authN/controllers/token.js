const config = require('config');
const redis = require('redis');
const uuid = require('uuid');
const Promise = require('bluebird');
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);
const db = require('./db');
let redisClientInstance;

module.exports = {
  login: login,
  check: checkToken
};

function *login(username, password) {
  const valid = db.check(username, password);
  if (!valid) {
    throw new Error('No Permission to Access', 403);
  }
  const token = uuid.v4();
  const client = yield redisClient();
  const key = generateTokenKey(token);

  let result = yield client.setAsync(
    key, username, 'NX', 'EX', config.redis.session.expires
  )
  .then(res => res && token);

  return result;
}


function *checkToken(token) {
  const client = yield redisClient();
  const key = generateTokenKey(token);
  return client.getAsync(key);
}

function generateTokenKey(token) {
  return config.redis.session.prefix + token;
}

function redisClient() {
  return new Promise((resolve, reject) => {
    if (redisClientInstance && redisClientInstance.connected) {
      return resolve(redisClientInstance);
    }
    const client = redis.createClient(config.redis.options);
    client.on('error', reject);
    client.on('connect', () => {
      redisClientInstance = client;
      return resolve(client);
    });
  });
}
