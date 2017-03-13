const bookshelf = require('./bookshelf_config');
const Game = require('./gameModel');
const Task_Status = require('./task_statusModel');
const Hardship_Status = require('./hardship_statusModel');


const Player = bookshelf.Model.extend({
  tableName: 'player',
  games: function() {
    return this.belongsTo('Game');
  },

  task_statuses: function() {
    return this.hasMany('Task_Status');
  },

  hardship_statuses: function() {
    return this.hasMany('Hardship_Status');
  }

});

module.exports = bookshelf.model('Player', Player);
