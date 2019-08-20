require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const vanbuildsController = require('./controllers/vanbuilds.js')

app.use('/vanbuilds', vanbuildsController)

app.listen(PORT, () => {
  console.log('listening on port', PORT)
});
