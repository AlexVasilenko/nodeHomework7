const redis = require('redis');
const config = require('config');
const Promise = require('bluebird');
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const key = 'filelist';
let redisClientInstance;

module.exports = {
    filePathFilter
};

function* filePathFilter(filePath) {
    const client = yield redisClient();
    res = yield client.sismemberAsync(key, filePath);
    if (res === 1) {
        return false;
    }
    else {
        yield client.saddAsync(key, filePath);
        return true;
    }
}

function redisClient() {
    return new Promise((resolve, reject) => {
        if (redisClientInstance && redisClientInstance.connected) {
            return resolve(redisClientInstance);
        }
        const client = redis.createClient(config.redisOptions);
        client.on('error', reject);
        client.on('connect', () => {
            redisClientInstance = client;
            return resolve(client);
        });
    });
}
