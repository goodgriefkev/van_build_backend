const express = require('express');

const router = express.Router();

const queries = require('../db/queries.js');

router.get('/', (req, res) => {
  queries.getAll()
  .then(vanbuilds => {
    res.json(vanbuilds);
  });
});

module.exports = router;
