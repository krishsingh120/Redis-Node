const { Queue } = require("bullmq");

const sampleQueue = new Queue("sampleQueue");

const addJob = async (payload) => {
  try {
    await sampleQueue.add("sampleJob", payload,  { removeOnComplete: true,});
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};

module.exports = addJob;
