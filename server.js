require('dotenv').config();

const express = require('express');
const env = require('dotenv')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

const PORT = process.env.PORT;

const vanbuilds = require('./api/vanbuilds.js');
const users = require('./api/users.js');
const auth = require('./auth/index.js');
const authMiddleware = require('./auth/middleware.js');

// // Middleware // //
app.use(cors({
  origin: 'https://eloquent-benz-b8d2dd.netlify.com',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/auth', auth);
app.use('/api/vanbuilds', vanbuilds);
app.use('/api/users', authMiddleware.ensureLoggedIn, users);

// // Error Handling // //
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || res.statusCode || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
});



app.listen(PORT, () => {
  console.log('listening on port', PORT)
});
