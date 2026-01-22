const { Worker } = require("bullmq");
const redisClient = require("../config/redisClient");

const sampleWorker = async (queueName) => {
  try {
    const worker = new Worker(
      queueName,
      async (job) => {
        // Will print { foo: 'bar'} for the first job
        // and { qux: 'baz' } for the second.
        console.log("Msg is consumed: ", job.data);
      },
      { connection: redisClient },
    );
  } catch (error) {}
};

module.exports = sampleWorker;
