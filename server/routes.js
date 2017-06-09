const router = require('express').Router();
const stub = require('./stub');

router.get("/channels", (req, res) => {
  res.json(stub).status(200);
});

module.exports = router;
