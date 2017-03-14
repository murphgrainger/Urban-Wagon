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

  getGoals: function() {
    return Goal
      .query()
      .skipUndefined()
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
