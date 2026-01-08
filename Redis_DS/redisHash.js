const redisClient = require("../redisClient");

// on "connect" -> event
redisClient.on("connect", () => {
  console.log("Redis is connected");
});

// on "disconnect" -> event
redisClient.on("disconnect", () => {
  console.log("Redis is disconnected");
});

const inti = async () => {
  // added hashSet
  const res = await redisClient.hset("sde", {
    name: "krish",
    company: "Attlassian",
    exp: "2+ year",
    skill: "backend developer",
  });
  console.log(res);

  await redisClient.hset("Job", {
    role: "Sde",
    openings: 10,
    exp: "interns",
    skill: "Nodejs",
  });

  // log property
  const roleProperty = await redisClient.hget("Job", "role");
  console.log(roleProperty);
};

inti();
