// const Queue = require("bull");
// const { match: matchWorker } = require("./workers/index");
// // const redisClient = require("./helpers/redis");
// if (process.env.REDISTOGO_URL) {
//   const match = new Queue("match", {
//     redisClient,
//   });
//   console.log(`REDIS CONNECT ~~~ ${redisClient.isOpen} QUEUES.JS`);
//   match.process((job, done) => {
//     matchWorker(job, done);
//   });



//   const queues = [
//     {
//       name: "match",
//       hostId: "Match Que Managers",
//       redisClient,
//     },
//   ];
 
//   module.exports = { match, queues };
// } else {
//   redis = require("redis").createClient();

//   const match = new Queue("match", {
//     redis,
//   });

//   match.process((job, done) => {
//     matchWorker(job, done);
//   });

//   const queues = [
//     {
//       name: "match",
//       hostId: "Match Que Managers",
//       redis: {
//         port: process.env.REDIS_PORT || 6379,
//         host: "127.0.0.1",
//         db: 1,
//       },
//     },
//   ];
//   console.log(`QUEUES FROM QUEUE PAGE ${queues}`)

//   module.exports = { match, queues };
// }

// const match = new Queue("match", {
//   redis,
// });

// match.process((job, done) => {
//   matchWorker(job, done);
// });

// const queues = [
//   {
//     name: "match",
//     hostId: "Match Que Managers",
//     redis: {
//       port: process.env.REDIS_PORT || 6379,
//       host: "127.0.0.1",
//       db: 1,
//     },
//   },
// ];

// module.exports = { match, queues };
