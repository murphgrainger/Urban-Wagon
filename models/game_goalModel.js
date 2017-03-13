const bookshelf = require('./bookshelf_config');
const Game = require('./gameModel')
const Goal = require('./goalModel')


const Game_Goal = bookshelf.Model.extend({
  tableName: 'game_goal',
  games: function() {
    return this.hasMany(Game, 'game');
  },

  goals: function() {
    return this.hasMany(Goal, 'goal');
  }
});

module.exports = Game_Goal;
