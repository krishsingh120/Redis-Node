const express = require("express");
const app = express();

const sampleWorker = require("./worker/sampleQueueWorker");
const addJob = require("./producer/sampleQueueProducer");

app.get("/", (req, res) => {
  return res.json({ message: "OK" });
});

app.listen(3000, async () => {
  console.log(`server is listening on port http://localhost:3000`);

  await sampleWorker("sampleQueue");

  const job = {
    data: {
      msg1: "hello!",
      msg2: "hey!",
    }
  };

  await addJob(job);
});
