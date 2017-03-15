const knex = require('./knex');
const queries = require("../db/queries");
// const transaction = require('objection').transaction;
const objection = require('objection');
const User = require('../models/user');
const Goal = require('../models/goal');
const Task = require('../models/task');
const Game = require('../models/game');
const Player = require('../models/player');


module.exports = {

  getGameAndRelated: function(id) {
    return Goal
      .query()
      .findById(id)
      .eager('[games.players.[hardship_statuses, task_statuses], tasks.task_status, hardships.hardship_status]');
  },

  getUser: function(id) {
    return User
      .query()
      .findById(id)
  },

  postNewUser: function(body) {
    console.log(body);
    return User
      .query()
      .insert(body)
  },

  getGoals: function() {
    return Goal
      .query()
      .skipUndefined()
  },

  getGoalWithTasks: function(id) {
    return Goal
      .query()
      .findById(id)
      .eager('tasks');
  },

  getTasksbyGoalID: function(id) {
    return Goal
      .query()
      .findById(id)
      .then(function(goal) {
        if (!goal) {
          throwNotFound();
        }
        console.log(goal);
        return goal
          .$relatedQuery('tasks')
          .skipUndefined()
      })
  },

  getGame: function(id) {
    console.log(id);
    return Game
      .query()
      .findById(id)
  },

  postNewGame: function(body) {
    let gameBody = {
      location: body.location,
      difficulty: body.difficulty,
      player_count: body.player_count,
      access_code: body.access_code,
      date_started: body.date_started,
      progress: body.progress,
      user_id: body.user_id
    };

    return Game
      .query()
      .insert(gameBody);
  },

postNewGameFromUser: function(body, id) {
  console.log(body);
  console.log('posting game from user!');
    return User
      .query()
      .findById(id)
      .then(function (user) {
        if (!user) { throwNotFound(); }
        return user
          .$relatedQuery('games')
          .insert(body);
      })
},

postNewPlayerFromGame: function(body, id) {
return Goal
    .query()
    .findById(id)
    .then(goal => {
      return goal
      .$relatedQuery('games')
      .insertGraph({
        location: body.location,
        difficulty: body.difficulty,
        player_count: body.player_count,
        access_code: body.access_code,
        date_started: body.date_started,
        progress: body.progress,
        user_id: body.user_id,

        players: [{
          trail_name: body.players[0],
        }, {
          trail_name: body.players[1]
        }
      ]
    });
  });
},

postGoalToGame: function(body, id) {

  // Add existing Person as an actor to a movie.
  // Add existing Goal as goal for a game
  return Game
      .query()
      .findById(id)
      .then(function (game) {
        if (!game) { throwNotFound(); }
        return game
          .$relatedQuery('goals')
          .relate(body.id);
      })

}




};

function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}
