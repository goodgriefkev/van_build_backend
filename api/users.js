const express = require('express');
const router = express.Router();
const queries = require('../db/user_queries.js');
const vanbuild = require('../db/vanbuild_queries.js')

function isValidId(req, res, next) {
  if(!Nan(req.params.id)) return next();
  next(new Error('User Not Found'));
};

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id)
  .then(data => {
    if(data) {
      res.json(data);
    } else {
      next();
    }
  })
})

module.exports = router;
