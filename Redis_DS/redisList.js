const redisClient = require("../redisClient");

// on "connect" -> event
redisClient.on("connect", () => {
  console.log("Redis is connected");
});

// on "disconnect" -> event
redisClient.on("disconnect", () => {
  console.log("Redis is disconnected");
});

// Read doc for more methods and func
const inti = async () => {
  // left push
  await redisClient.lpush("msgs", "krish");

  // left pop
  const res = await redisClient.lpop("msgs");
  console.log(res);

  await redisClient.rpush("array", 1);
  await redisClient.rpush("array", 2);
  await redisClient.rpush("array", 3);
  await redisClient.rpush("array", 4);
  await redisClient.rpush("array", 5);

  // Blocking mode me left se pop
  const x = await redisClient.blpop("array", 10);
  console.log("result is: ", x);

  const ans = await redisClient.lrange("array", 0, -1);
  console.log("ans is: ", ans);

  // await redisClient.lpush("username", "krish singh");

  // delete key
  await redisClient.del("username");
};

inti();
