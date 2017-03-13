const bookshelf = require('./bookshelf_config');
require('./gameModel')
require('./taskModel')
require('./hardshipModel')
require('./game_goalModel');


const Goal = bookshelf.Model.extend({
  tableName: 'goal',
  games: function() {
    return this.belongsToMany('Game').through('Game_Goal');
  },

  tasks: function() {
    return this.hasMany('Task');
  },

  hardships: function() {
    return this.hasMany('hardship');
  }
});

module.exports = bookshelf.model('Goal', Goal);
