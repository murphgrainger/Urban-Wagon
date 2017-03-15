const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require("../db/queries");
const transaction = require('objection').transaction;
const objection = require('objection');


router.get('/game/:id/everything', function(req, res, next) {
   queries.getGameAndRelated(req.params.id)
  .then(function (game) {
    res.json(game);
  }).catch(err => {
    res.json(err);
  });
});

router.get('/user/:id', function(req, res, next) {
   queries.getUser(req.params.id)
  .then(function (user) {
    res.json(user);
  }).catch(err => {
    res.json(err)
  });
});

router.get('/goal/:id/task', function(req, res, next) {
  queries.getGoalWithTasks(req.params.id)
  .then(goals => {
    res.json(goals);
  }).catch(err => {
    res.send(err)
  });
});

router.get('/goal', function(req, res, next) {
  queries.getGoals()
 .then(function (goal) {
   res.json(goal);
 }).catch(err => {
   console.log(err);
   res.json(err);
 });
});

router.post('/game/:id/goal', function(req, res, next) {
  console.log(req.params.id);
  queries.postGoalToGame(req.body, req.params.id)
  .then(function (game) {
    console.log('through query', game);
    res.json(game);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.get('/game/:id', function(req, res, next) {
  console.log('getting game by id');
  queries.getGame(req.params.id)
    .then(function(games) {
      return res.json(games);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/user', function(req, res, next) {
   queries.postNewUser(req.body)
  .then(function (user) {
    res.json(user);
  }).catch(err => {
    res.json(err);
  });
});

router.post('/user/:id/game', function(req, res, next) {
   queries.postNewGame(req.body)
  .then(function (game) {
    console.log('through query', game);
    res.json(game);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.post('/user/:id/games', function(req, res, next) {
   queries.postNewGameFromUser(req.body, req.params.id)
  .then(function (game) {
    console.log('through query', game);
    res.json(game);
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.get('/goal/:id/tasks', function(req, res, next) {
  queries.getTasksbyGoalID(req.params.id)
    .then(function(tasks) {
      console.log(tasks);
      res.json(tasks);
    })

});

// router.get('/oldschool', function(req, res, next) {
//   return knex('goal')
//     .join('task', 'goal_id', '=', 'goal.id')
//     .select('task.title', 'goal.name')
//     .then(data => {
//       console.log(data);
//       res.json(data)
//     }).catch(err => {
//       console.log(err);
//     })
// });


function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}

module.exports = router;
