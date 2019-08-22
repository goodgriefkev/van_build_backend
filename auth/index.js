const express = require('express');
const router = express.Router();

const user = require('../db/user_queries.js');

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
    user
      .getOneByEmail(req.body.email)
      .then(user => {
        console.log('user', user)
        if(!user) {
          res.json({
            user,
            message: "yep signup route"
          })
        } else {
          next(new Error('Email Unavailable'))
        }
      })
  } else {
    next(new Error('Invalid User'));
  }
});

module.exports = router;
