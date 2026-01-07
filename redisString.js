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
  // get the value while using key
  const result = await redisClient.get("user:3");
  console.log("result is : ", result);

  // set (key, value) pair
  await redisClient.set("msg:1", "hello, how are you");
  await redisClient.set("msg:2", "hey, how are you");
  await redisClient.set("msg:3", "hi, how are you");

  const ans = await redisClient.mget(["msg:1", "msg:2", "msg:3"]);

  // expire the key -> value after some seconds
  await redisClient.set("expireValue", "im expire in some seconds");

  // expire after 10sec
  await redisClient.expire("expireValue", 10);
};

inti();
