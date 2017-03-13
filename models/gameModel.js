const bookshelf = require('./bookshelf_config');
const User = require('./userModel');
const Player = require('./playerModel');
const Goal = require('./goalModel');


const Game = bookshelf.Model.extend({
  tableName: 'game',
  users: function() {
    return this.belongsTo(User, 'user');
  },

  players: function() {
    return this.hasMany(Player, 'player');
  },

  goals: function() {
    return this.belongsToMany(Goal, 'game_goal');
  },
});

module.exports = Game;
