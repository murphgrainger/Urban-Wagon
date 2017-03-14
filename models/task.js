const Model = require('objection').Model;
const Goal = require('./goal')

class Task extends Model {
  static get tableName() {
    return 'task';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: {
          type: 'integer'
        },
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        allotted_time: {
          type: 'integer'
        },
        difficulty: {
          type: 'integer'
        },
        goal_id: {
          type: 'integer'
        }
      }
    };
  }

  static get relationMappings() {
    return {
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Goal,
        join: {
          from: 'task.goal_id',
          to: 'goal.id'
        }
      }
    };
  }
}
// Task.relationMappings = {
//   goals: {
//     relation: Model.BelongsToOneRelation,
//     modelClass: Goal,
//     join: {
//       from: 'task.goal_id',
//       to: 'goal.id'
//     }
//   }
// };

module.exports = Task;
