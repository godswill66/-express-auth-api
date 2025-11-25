// config/redis.js

const { Redis } = require('ioredis');
// Load environment variables
const dotenv = require("dotenv");
dotenv.config();

const redis = new Redis({
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT,
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,

      maxRetriesPerRequest: null,
      enableReadyCheck: false, 
});

module.exports = redis;