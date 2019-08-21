const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validVanbuild(data) {
  const hasName = typeof data.name == 'string' && data.name.trim() != '';
  return hasName;
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

router.post('/', (req, res, next) => {
  if(validVanbuild(req.body)) {
    queries.create(req.body)
    .then(vanbuilds => {
      res.json(vanbuilds[0]);
    })
  } else {
    next(new Error('Invalid Entry'))
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validVanbuild(req.body)) {
    queries.update(req.params.id, req.body)
    .then(vanbuilds => {
      res.json(vanbuilds[0]);
    })
  } else {
    next(new Error('Invalid Entry'))
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id)
  .then(() => {
    res.json({
      deleted: true
    })
  })
});

module.exports = router;
