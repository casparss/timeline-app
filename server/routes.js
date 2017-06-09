const router = require('express').Router();
const Channel = require('./channel.model');
const stub = require('./stub');

router.get("/channels", (req, res) => {

  Channel.find().exec()
    .then(channels => res.json(channels).status(200))
    .catch(err => res.json(err).status(500));

});

module.exports = router;
