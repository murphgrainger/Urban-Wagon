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

router.get('/task', function(req, res, next) {
  queries.getTask()
    .then(tasks => {
      console.log('hi', {
        tasks
      });
      res.json('Success');
    });
});

router.get('/goal', function(req, res, next) {
  queries.getGoal()
    .then(goals => {
      console.log('hi', {
        goals
      });
      res.json('Success');
    });
});

router.get('/goals', function(req, res, next) {
  queries.getGoalsAndTasks()
    .then(data => {
      console.log('hi', {
        data
      });
      res.json('Success');
    }).catch(err => {
      next(err)
    });
});

module.exports = router;
