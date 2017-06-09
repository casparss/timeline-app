const express = require('express');
const app = express();
const router = require('./routes');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use('/', express.static('../dist'));
app.use('/api', router);
app.listen(3000, () => {
  console.log("Server is started!");
});
