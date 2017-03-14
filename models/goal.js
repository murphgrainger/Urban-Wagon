const Model = require('objection').Model;
const Task = require('./task')

class Goal extends Model {
  // Table name is the only required property.
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
// Goal.relationMappings = {
//   tasks: {
//     relation: Model.HasManyRelation,
//     modelClass: Task,
//     join: {
//       from: 'goal.id',
//       to: 'task.goal_id'
//     }
//   }
// };

module.exports = Goal;
