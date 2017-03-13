const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require("../db/queries");

router.post('/game', function(req, res, next) {
  // console.log(req.body);
  // queries.postNewGame(req.body)
  //   .then((all) => {
  //     console.log('hi', all);
  //     res.json('Server Notice: Game Successfully Posted!');
  //   });
});

router.get('/goal', function(req, res, next) {
  queries.getGoals()
    .then(goals => {
      console.log({
        goals
      });
      res.json('Success');
    });
});

module.exports = router;
