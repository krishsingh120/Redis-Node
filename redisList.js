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
  // left push
  const res1 = await redisClient.lpush("msgs", "krish");
  console.log(res1);

  const res2 = await redisClient.lpush("msgs", "singh");
  console.log(res2);


  // left pop
  const res3 = await redisClient.lpop("msgs");
  console.log(res3);

  const res4 = await redisClient.lpop("msgs");
  console.log(res4);
};

inti();
