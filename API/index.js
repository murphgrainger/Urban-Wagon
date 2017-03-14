const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require("../db/queries");
const transaction = require('objection').transaction;
const objection = require('objection');
const Goal = require('../models/goal');
const Task = require('../models/task');


router.post('/game', function(req, res, next) {
  console.log(req.body);
  // queries.postNewGame(req.body)
  //   .then((all) => {
  //     console.log('hi', all);
  //     res.json('Server Notice: Game Successfully Posted!');
  //   });
})

router.get('/goal', function(req, res, next) {
  console.log('hey there');
  return Goal
    .query()
    .skipUndefined()
    .then(function(goals) {
      console.log(goals);
      return res.json(goals);
    })
    .catch(next);
});

router.get('/goals', function(req, res, next) {
  console.log('trying eager');
  return Goal
    .query()
    .eager('tasks')
    .then(function(goals) {
      console.log(goals);
      res.json(goals);
    })
    .catch(next);
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
    })
});

router.get('/goals/:id/tasks', function* (req, res, next) {
  console.log('hiiii!!');
  const goal = yield Goal
    .query()
    .findById(req.params.id);
  console.log(req.params.id);
  if (!goal) {
    throwNotFound();
  }

  const tasks = yield goal
    .$relatedQuery('tasks')
    .skipUndefined()

  res.json(tasks);
});

function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}

module.exports = router;
