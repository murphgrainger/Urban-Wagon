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
      goal: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: 'game.goal_id',
          to: 'goal.id'
        }
      }
    };
  }
}

module.exports = Game;
