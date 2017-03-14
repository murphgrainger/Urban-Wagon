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

  getGoalsAndTasks: function() {
    return Goal
      .query()
      .eager('tasks');
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

    let playerBody = {
      trail_name: body.trail_name
    };

    let goalBody = {
      name: body.name
    };

    return Game
      .query()
      .insert(gameBody);
  },

postNewGameandGoal: function() {
  // Inserting a movie for a person creates two queries: the movie insert query
  // and the join table row insert query. It is wise to use a transaction here.
  objection.transaction(Goal, function (Goal) {
    console.log('heyo');
    return Goal
      .query()
      .findById(id)
      .then(function (goal) {
        console.log('hi there');
        if (!goal) { throwNotFound();
        }
        return goal
          .$relatedQuery('games')
          .insert(goalBody);
      }).catch(err => {
        console.log(err);
      });
  })
}




};

function throwNotFound() {
  var error = new Error();
  error.statusCode = 404;
  throw error;
}
