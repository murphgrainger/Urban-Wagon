const bookshelf = require('./bookshelf_config');
const Task = require('./taskModel');
const Player = require('./playerModel');

const Task_Status = bookshelf.Model.extend({
  tableName: 'task_status',
  tasks: function() {
    return this.belongsTo('Task');
  },
  players: function() {
    return this.belongsTo('Player')
  }

});

module.exports = bookshelf.model('Task_Status', Task_Status);
