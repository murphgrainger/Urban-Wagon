const Model = require('objection').Model;
const Task = require('./task');
const Hardship = require('./hardship');
const Game = require('./game');

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
      },
      hardships: {
        relation: Model.HasManyRelation,
        modelClass: Hardship,
        join: {
          from: 'goal.id',
          to: 'hardship.goal_id'
        }
      },
      games: {
        relation: Model.HasManyRelation,
        modelClass: Game,
        join: {
          from: 'goal.id',
          to: 'game.goal_id'
        }
      }
    };
  }
}


module.exports = Goal;
