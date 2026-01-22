const Redis = require("ioredis");

const redisClient = new Redis({ maxRetriesPerRequest: null });

module.exports = redisClient;