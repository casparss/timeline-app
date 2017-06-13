const router = require('express').Router();
const Channel = require('./channel.model');
const stub = require('./stub');

router.get("/channels", (req, res) => {

  Channel.find().exec()
    .then(channels => res.json(channels).status(200))
    .catch(err => res.json(err).status(500));

});

router.post("/channel", (req, res) => {

  new Channel(req.body).save()
    .then(channel => res.json(channel).status(200))
    .catch(err => res.json(err).status(500));

});

router.post("/channel/:channelId/acitvity/:activityId", (req, res) => {

  let { channelId, activityId } = req.params;
  let activityForm = req.body;

  Channel.findById(channelId).exec()
    .then(channel => {
      Object.assign(channel.activities.id(activityId), activityForm);
      return channel.save();
    })
    .then(channel => res.json(channel.activities.id(activityId)).status(200))
    .catch(err => res.json(err).status(500));

});

module.exports = router;
