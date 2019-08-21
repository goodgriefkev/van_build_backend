require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT;

const vanbuilds = require('./api/vanbuilds.js');

// // Middleware // //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/vanbuilds', vanbuilds);

app.listen(PORT, () => {
  console.log('listening on port', PORT)
});
