const db = require('./db');

let Channel = db.Schema({
  name: String,
  activities: [{
    title: String,
    period: {
      from: Date,
      to: Date
    },
    location: String,
    description: String,
    communication_drivers: String,
    audience: String,
    kols_engaged: [String],
    no_of_hcps: Number,
    status: String
  }]
});

module.exports = db.model('Channel', Channel);
