const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
  queries.getAll()
  .then(data => {
    res.status(200).json(data);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id)
  .then(data => {
    if(data) {
      res.json(data);
    } else {
      next();
    }
  });
});

module.exports = router;
