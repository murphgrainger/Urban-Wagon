const bookshelf = require('./bookshelf_config');
const Game = require('./gameModel')
const Task = require('./taskModel')
const Hardship = require('./hardshipModel')


const Goal = bookshelf.Model.extend({
  tableName: 'goal',
  games: function() {
    return this.belongsToMany(Game, 'game_goal')
  },

  tasks: function() {
    return this.hasMany(Task, 'task')
  },

  hardships: function() {
    return this.hasMany(Hardship, 'hardship')
  }
});

module.exports = Goal;
