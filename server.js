require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

const vanbuilds = require('./api/vanbuilds.js');
const users = require('./api/users.js');
const auth = require('./auth/index.js');

// // Middleware // //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/auth', auth);
app.use('/api/vanbuilds', vanbuilds);
app.use('/api/users', users);

// // Error Handling // //
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
});



app.listen(PORT, () => {
  console.log('listening on port', PORT)
});
