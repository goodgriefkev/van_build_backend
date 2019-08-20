const express = require('express');
const vanbuilds = express.Router();

vanbuilds.get('/', (req, res) => {
  res.send('index')
});

module.exports = vanbuilds
