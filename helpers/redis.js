if (process.env.REDISTOGO_URL) {
  const rtg = require("url").parse(process.env.REDISTOGO_URL);
  var redis = require("redis").createClient({
    port: rtg.port,
    host: rtg.hostname,
    password: '66bb556aab288fabf9855f61923d2f60'
  });
  redis.auth(rtg.auth.split(":")[1]);

  redis.on("connect", function () {
    console.log("Redis client connected");
  });
  redis.on("ready", () => {
    console.log("Redis ready to be used");
  });

  redis.on("error", (err) => {
    console.log(`REDIS CONNECTION ERROR ~~~ ${err}`);
  });

  redis.on("end", () => {
    console.log("Client disconnected from Redis");
  });

  module.exports = { redis };
} else {
  redis = require("redis").createClient();
  console.log(`REDIS NOT FOUND ~~~ ${redis} from redis file`);
  redis.on("connect", function () {
    console.log("Redis client connected");
  });
  redis.on("ready", () => {
    console.log("Redis ready to be used");
  });

  redis.on("error", (err) => {
    console.log(`REDIS CONNECTION ERROR ~~~ ${err}`);
  });

  redis.on("end", () => {
    console.log("Client disconnected from Redis");
  });
  console.log(`REDIS CLIENT REDIS FILE ~~~ ${redis}`)
  module.exports = { redis };
}
