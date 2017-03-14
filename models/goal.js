const Model = require('objection').Model;
const Task = require('./task')

class Goal extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'goal';
  }

  static get defaultEager() {
    return 'tasks'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        game_id: {
          type: 'integer'
        },
      }
    };
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
