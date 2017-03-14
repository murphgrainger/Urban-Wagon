const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require("../db/queries");
const transaction = require('objection').transaction;
const objection = require('objection');
const Goal = require('../models/goal');
const Task = require('../models/task');


router.post('/user/:id/game', function(req, res, next) {
   queries.postNewGame(req.body, req.params.id)
  .then(function (game) {
    console.log('through query', game);
    res.json(game);
  }).catch(err => {
    console.log(err);
    res.json(err)
  });
});

router.get('/goal', function(req, res, next) {
  return Goal
    .query()
    .skipUndefined()
    .then(function(goals) {
      return res.json(goals);
    })
    .catch(next);
});

router.get('/game/:id', function(req, res, next) {
  console.log('getting game');
  queries.getGame(req.params.id)
    .then(function(games) {
      return res.json(games);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/goals', function(req, res, next) {
  queries.getGoalsAndTasks()
  .then(goals => {
    res.json(goals);
  }).catch(err => {
    console.log('err', err);
    res.send(err)
  });
});

router.get('/goal/:id/task', function(req, res, next) {
  return Goal
    .query()
    .findById(req.params.id)
    .then(function(goal) {
      if (!goal) {
        throwNotFound();
      }
      console.log(goal);
      return goal
        .$relatedQuery('tasks')
        .skipUndefined()
    })
    .then(function(tasks) {
      console.log(tasks);
      res.json(tasks);
    })

});

router.get('/oldschool', function(req, res, next) {
  return knex('goal')
    .join('task', 'goal_id', '=', 'goal.id')
    .select('task.title', 'goal.name')
    .then(data => {
      console.log(data);
      res.json(data)
    }).catch(err => {
      console.log(err);
    })
});


function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}

module.exports = router;
