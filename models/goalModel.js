const bookshelf = require('./bookshelf_config');
const Game = require('./gamemodel')

const Goal = bookshelf.Model.extend({
  tableName: 'goal',
  goals: function() {
    return this.belongsToMany(Game, 'game_goal')
  }
});

module.exports = Goal;
