const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const queries = require("../db/queries");


router.get('/', function(req, res, next) {
   res.send('Trail Break has loaded!');
});

// Get Game and everything related to the game
router.get('/game/:id', function(req, res, next) {
   queries.getGameAndRelated(req.params.id)
  .then(function (game) {
    res.json(game);
  }).catch(err => {
    res.json(err);
  });
});

router.get('/game/:id/player', function(req, res, next) {
   queries.getPlayers(req.params.id)
  .then(function (player) {
    res.json(player);
  }).catch(err => {
    res.json(err);
  });
});


// Master Game/Player Post Route
router.post('/goal/:id/game', function(req, res, next) {
  console.log(req.body);
   queries.postGameAndPlayer(req.body, req.params.id)
  .then(function (player) {
    res.json(player);
  }).catch(err => {
    res.json(err);
  });
});

//Assign Task to Player
router.post('/player/:id/task', function(req, res, next) {
   queries.assignTask(req.body, req.params.id)
  .then(function (response) {
    res.json(response);
  }).catch(err => {
    res.json(err);
  });
});

//Get Player With Active Task
router.get('/player/active', function(req, res, next) {
   queries.getActivePlayer()
  .then(function (player) {
    res.json(player);
  }).catch(err => {
    res.json(err);
  });
});

router.patch('/task_status/:id', function(req, res, next) {
   queries.updateTaskStatus(req.body, req.params.id)
  .then(function (response) {
    res.json(response);
  }).catch(err => {
    res.json(err);
  });
});

router.patch('/player/:id', function(req, res, next) {
   queries.updatePlayerHealth(req.body, req.params.id)
  .then(function (response) {
    res.json(response);
  }).catch(err => {
    res.json(err);
  });
});

router.patch('/player/:id/rest_count', function(req, res, next) {
   queries.updatePlayerRest(req.params.id, req.body)
  .then(function (player) {
    res.json(player);
  }).catch(err => {
    res.json(err);
  });
});

// Get User by Id
router.get('/user/:id', function(req, res, next) {
   queries.getUser(req.params.id)
  .then(function (user) {
    res.json(user);
  }).catch(err => {
    res.json(err);
  });
});

// Add User (will use for signup)
router.post('/user', function(req, res, next) {
   queries.postNewUser(req.body)
  .then(function (user) {
    res.json(user);
  }).catch(err => {
    res.json(err);
  });
});

// Eager join to show all goals and their associated tasks.
router.get('/goal/:id/task', function(req, res, next) {
  queries.getGoalWithTasks(req.params.id)
  .then(goals => {
    res.json(goals);
  }).catch(err => {
    res.send(err)
  });
});

// Get all goals, could delete later to clean up.
router.get('/goal', function(req, res, next) {
  queries.getGoals()
 .then(function (goal) {
   res.json(goal);
 }).catch(err => {
   console.log(err);
   res.json(err);
 });
});

// Get game by game.id
router.get('/game/:id', function(req, res, next) {
  queries.getGame(req.params.id)
    .then(function(games) {
      return res.json(games);
    })
    .catch(err => {
      res.send(err);
    });
});

//Not in use but auto-associates game to user.id
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


//Return all tasks with according Goal Id
router.get('/goal/:id/tasks', function(req, res, next) {
  queries.getTasksbyGoalID(req.params.id)
    .then(function(tasks) {
      console.log(tasks);
      res.json(tasks);
    });

});

module.exports = router;
