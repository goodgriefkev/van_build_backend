const express = require('express');
const router = express.Router();
const queries = require('../db/user_queries.js');
const vanbuild = require('../db/vanbuild_queries.js');

const authMiddleware = require('../auth/middleware.js');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('User Not Found'));
};

router.get('/:id', authMiddleware.allowAccess, isValidId, (req, res, next) => {
  queries.getOne(req.params.id)
  .then(data => {
    if(data) {
      res.json(data);
    } else {
      next();
    }
  })
});

router.get('/:id/vanbuild', authMiddleware.allowAccess, (req, res) => {
  if (!isNaN(req.params.id)) {
    vanbuild
      .getByUser(req.params.id)
      .then(vanbuild => {
        res.json(vanbuild)
      });
  } else {
    resError(res, 500, "Invalid ID");
  }
});



module.exports = router;
