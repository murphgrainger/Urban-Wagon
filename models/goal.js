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
        relation: Model.ManyToManyRelation,
        modelClass: Game,
        join: {
          from: 'goal.id',
          through: {
            from: 'game_goal.goal_id',
            to: 'game_goal.game_id'
          },
          to: 'game.id'
        }
      },
    };
  }
}


module.exports = Goal;
