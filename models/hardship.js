const Model = require('objection').Model;
const Hardship_Status = require('./hardship_status');

class Hardship extends Model {
  static get tableName() {
    return 'hardship';
  }

  static get relationMappings() {
    return {
      goal: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/goal',
        join: {
          from: 'hardship.goal_id',
          to: 'goal.id'
        }
      },
      hardship_status: {
        relation: Model.HasManyRelation,
        modelClass: Hardship_Status,
        join: {
          from: 'hardship.id',
          to: 'hardship_status.hardship_id'
        }
      }
    };
  }
}

module.exports = Hardship;
