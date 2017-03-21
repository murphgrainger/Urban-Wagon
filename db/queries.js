const knex = require('./knex');
const queries = require("../db/queries");
// const transaction = require('objection').transaction;
const objection = require('objection');
const User = require('../models/user');
const Goal = require('../models/goal');
const Task = require('../models/task');
const Game = require('../models/game');
const Player = require('../models/player');
const Task_Status = require('../models/task_status');
const Hardship_Status = require('../models/hardship_status');


module.exports = {

  getGameAndRelated: function(id) {
    return Game
      .query()
      .findById(id)
      .eager('goal.[tasks, hardships]')
  },

  getPlayers: function(id) {
    return Game
      .query()
      .findById(id)
      .then(function (game) {
        if (!game) { throwNotFound(); }
        return game
          .$relatedQuery('players')
          .skipUndefined()
        });
  },

  getActivePlayer: function() {
    return Task_Status
      .query()
      .skipUndefined()
      .where('status', '=', 'Accepted')
      .eager('player')
  },

  getUser: function(id) {
    return User
      .query()
      .findById(id);
  },

  postNewUser: function(body) {
    return User
      .query()
      .insert(body);
  },

  getGoals: function() {
    return Goal
      .query()
      .skipUndefined();
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
        return goal
          .$relatedQuery('tasks')
          .skipUndefined()
      });
  },

  getGame: function(id) {
    return Game
      .query()
      .findById(id);
  },

// Not in use but is useful to see auto-ties of game to user
postNewGameFromUser: function(body, id) {
    return User
      .query()
      .findById(id)
      .then(function (user) {
        if (!user) { throwNotFound(); }
        return user
          .$relatedQuery('games')
          .insert(body);
      });
},


//Master game and player insert at once, need to map players instead of hard code
postGameAndPlayer: function(body, id) {
  return Goal
    .query()
    .findById(id)
    .then(goal => {
      let graph = {
        location: body.location,
        difficulty: body.difficulty,
        player_count: body.player_count,
        access_code: body.access_code,
        date_started: body.date_started,
        progress: 0,
        user_id: body.user_id,
        players: [],
      }

      body.players.forEach(player => {
        graph.players.push({
          trail_name: player,
          morale: 'Great',
          rest_count: 0
        })
      })

      return goal
      .$relatedQuery('games')
      .insertGraph(graph);
    });
  },

assignTask: function(body, id) {
return Player
  .query()
  .findById(id)
  .then(player => {
    return player
    .$relatedQuery('task_statuses')
    .insert({
      task_id: body.id,
      status: 'Accepted'
    })
  })
},

updateTaskStatus: function(body, id) {
return Task_Status
  .query()
  .findById(id)
  .patch(body)
},

updatePlayerHealth: function(body, id) {
return Player
  .query()
  .findById(id)
  .patch(body)
},

updatePlayerRest: function(id, body) {
  return Player
    .query()
    .findById(id)
    .patch(body)
  }

};

function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}
