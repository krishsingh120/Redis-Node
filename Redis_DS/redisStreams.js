const redisClient = require("../redisClient");

// on "connect" -> event
redisClient.on("connect", () => {
  console.log("Redis is connected");
});

// on "disconnect" -> event
redisClient.on("end", () => {
  console.log("Redis is disconnected");
});

const inti = async () => {
  const res = await redisClient.xadd(
    "race:france",
    "*",
    "rider",
    "Castilla",
    "speed",
    "30.2",
    "position",
    "1",
    "location_id",
    "1"
  );

  // timestamp-based ID -> 1767887069162-0
  console.log("Stream Entry ID:", res);
};

inti();
