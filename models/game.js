const Model = require('objection').Model;
const Player = require('./player');
const Goal = require('./goal');

class Game extends Model {
  static get tableName() {
    return 'game';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: 'game.user_id',
          to: 'user.id'
        }
      },
      players: {
        relation: Model.HasManyRelation,
        modelClass: Player,
        join:{
          from: 'game.id',
          to: 'player.game_id'
        }
      },
      goals: {
        relation: Model.ManyToManyRelation,
        modelClass: Goal,
        join: {
          from: 'game.id',
          through: {
            from: 'game_goal.game_id',
            to: 'game_goal.goal_id'
          },
          to: 'goal.id'
        }
      },
    };
  }
}

module.exports = Game;
