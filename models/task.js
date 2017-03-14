const Model = require('objection').Model;
// const Goal = require('./goal')

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
      }
    };
  }
}

module.exports = Task;
