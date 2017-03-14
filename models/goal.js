const Model = require('objection').Model;
const Task = require('./task')

class Goal extends Model {
  static get tableName() {
    return 'goal';
  }

  static get relationMappings() {
    return {
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: Task,
        join: {
          from: 'goal.id',
          to: 'task.goal_id'
        }
      }
    };
  }
}


module.exports = Goal;
