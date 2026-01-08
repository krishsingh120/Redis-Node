const redisClient = require("./redisClient");

// on "connect" -> event
redisClient.on("connect", () => {
  console.log("Redis is connected");
});

// on "disconnect" -> event
redisClient.on("disconnect", () => {
  console.log("Redis is disconnected");
});

const inti = async () => {
  await redisClient.sadd("ip", 1);
  await redisClient.sadd("ip", 2);
  await redisClient.sadd("ip", 3);
  await redisClient.sadd("ip", 4);
  await redisClient.sadd("ip", 5);

  // remove elem from sets
  await redisClient.srem("ip", 5);

  // check member belongs to this key
  const res = await redisClient.sismember("ip", 1);
  console.log(res);

  await redisClient.sadd("id", 1);
  await redisClient.sadd("id", 4);
  await redisClient.sadd("id", 3);
  await redisClient.sadd("id", 8);
  await redisClient.sadd("id", 2);
  await redisClient.sadd("id", 10);

  // intersection of multiple sets
  const inter = await redisClient.sinter("ip", "id");
  console.log(inter);
};

inti();
