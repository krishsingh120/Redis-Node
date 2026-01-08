const express = require("express");
const app = express();

const redisClient = require("./redisClient");

const axios = require("axios");


// Redis use as a cache 
app.get("/data", async (req, res) => {
  try {
    const cacheData = await redisClient.get("todos");

    if (cacheData) return res.json(JSON.parse(cacheData));

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    await redisClient.set("todos", JSON.stringify(data));
    await redisClient.expire("todos", 30);

    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(6000);
