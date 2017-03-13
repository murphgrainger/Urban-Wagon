const bookshelf = require('./bookshelf_config');
const Goal = require('./goalModel')
const Task_Status = require('./task_statusModel')

const Task = bookshelf.Model.extend({
  tableName: 'task',
  goals: function() {
    return this.belongsTo(Goal, 'goal');
  },

  task_statuses: function() {
    return this.hasMany(Task_Status, 'task_status');
  }

});

module.exports = Task;
