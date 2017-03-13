const bookshelf = require('./bookshelf_config');
const Goal = require('./goalModel')

const Game = bookshelf.Model.extend({
  tableName: 'game',
  goals: function() {
    return this.belongsToMany(Goal, 'game_goal');
  }
});

module.exports = Game;
