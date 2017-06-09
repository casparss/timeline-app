let db = require('./db');
let Channel = require('./channel.model');
let channelsStub = require('./stub');

Promise.all(channelsStub.map(channel => new Channel(channel).save()))
  .then(
    docs => {
      console.log("Files successfully added to DB.", docs);
      process.exit();
    },
    err => {
      console.error("Error: ", err);
      process.exit();
    }
  );
