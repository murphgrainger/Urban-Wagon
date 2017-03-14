const Model = require('objection').Model;
const Task_Status = require('./task_status');

class Task extends Model {
  static get tableName() {
    return 'task';
  }

  static get relationMappings() {
    return {
      goal: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/goal',
        join: {
          from: 'task.goal_id',
          to: 'goal.id'
        }
      },
      task_status: {
        relation: Model.HasManyRelation,
        modelClass: Task_Status,
        join: {
          from: 'task.id',
          to: 'task_status.task_id'
        }
      }
    };
  }
}

module.exports = Task;
