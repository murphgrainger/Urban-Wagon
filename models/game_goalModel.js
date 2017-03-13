const bookshelf = require('./bookshelf_config');
require('./gameModel');
require('./goalModel');


const Game_Goal = bookshelf.Model.extend({
  tableName: 'game_goal',
  games: function() {
    return this.hasMany('Game');
  },

  goals: function() {
    return this.hasMany('Goal');
  }
});

module.exports = (Game_Goal, 'Game_Goal');
