require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT;

const vanbuildsController = require('./controllers/vanbuilds.js')


// // Middleware // //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/vanbuilds', vanbuildsController);

app.listen(PORT, () => {
  console.log('listening on port', PORT)
});
