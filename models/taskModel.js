const bookshelf = require('./bookshelf_config');
const Goal = require('./goalModel')
require('./task_statusModel')

const Task = bookshelf.Model.extend({
  tableName: 'task',
  goal: function() {
    return this.belongsTo(Goal);
  },

  task_status: function() {
    return this.hasMany('Task_Status');
  }

});

module.exports = bookshelf.model('Task', Task);
