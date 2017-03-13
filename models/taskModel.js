const bookshelf = require('./bookshelf_config');
require('./goalModel')
require('./task_statusModel')

const Task = bookshelf.Model.extend({
  tableName: 'task',
  goals: function() {
    return this.belongsTo('Goal');
  },

  task_statuses: function() {
    return this.hasMany('Task_Status');
  }

});

module.exports = bookshelf.model('Task', Task);
