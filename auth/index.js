const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../db/user_queries.js');

router.get('/', (req, res) => {
  res.json({
    message: "yep, auth."
  })
});

function validateUser(user) {
  const validEmail = typeof user.email == 'string'
                    && user.email.trim() != '';
  const validPassword = typeof user.password == 'string'
                    && user.password.trim() != ''

  return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
  if(validateUser(req.body)) {
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        // console.log('user', user)
        if(!user) {
          bcrypt
            .hash(req.body.password, 12)
            .then((hash) => {
              const createdUser = {
                email: req.body.email,
                password: hash,
                created_at: new Date()
              };
              User
                .create(createdUser)
                .then(id => {
                  res.json({
                    id,
                    message: "yep signup route"
                  });
                })
            });
        } else {
          next(new Error('Email Unavailable'))
        }
      })
  } else {
    next(new Error('Invalid User'));
  }
});

router.post('/login', (req, res, next) => {
  if(validateUser(req.body)) {
    User
      .getOneByEmail(req.body.email)
      .then(user => {
        console.log('user', user);
        if(user) {
          bcrypt
            .compare(req.body.password, user.password)
            .then((outcome) => {
              if(outcome) {
                res.cookie('user_id', user.id, {
                  httpOnly: true,
                  secure: req.app.get('env') != 'development',
                  signed: true
                });
                res.json({
                  message: "Logged in"
                });
              } else {
                next(Error('Invalid Login'));
              };
            });
        } else {
          next(Error('Invalid Login'));
        }
      })
  } else {
    next(new Error('Invalid Login'));
  };
});

module.exports = router;
