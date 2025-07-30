const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-16288.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 16288
    }
});
module.exports = redisClient;