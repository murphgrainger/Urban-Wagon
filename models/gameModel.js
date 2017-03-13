const bookshelf = require('./bookshelf_config');
require('./userModel');
require('./playerModel');
require('./goalModel');
require('./game_goalModel');


const Game = bookshelf.Model.extend({
  tableName: 'game',
  users: function() {
    return this.belongsTo('User');
  },

  players: function() {
    return this.hasMany('Player');
  },

  goals: function() {
    return this.belongsToMany('Goal').through('Game_Goal');
  },
});

module.exports = ('Game', Game);
