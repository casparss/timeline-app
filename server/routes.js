const router = require('express').Router();
const Channel = require('./channel.model');
const stub = require('./stub');
const multer = require('multer');
const csv = require('csvtojson');
const streamifier = require('streamifier');

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

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

router.delete("/channel/:channelId", (req, res) => {

  let { channelId } = req.params;

  Channel.findOneAndRemove({ _id: channelId }).exec()
    .then(doc => res.json(doc).status(201))
    .catch(err => res.json(err).status(500));

});

router.post("/import", upload.single('file'), (req, res) => {

  csv()
    .fromStream(streamifier.createReadStream(req.file.buffer))
    .on('csv', csvRow => console.log(csvRow))
    .on('done', error => error ? res.json(error).status(500) : res.status(201));

});

module.exports = router;
