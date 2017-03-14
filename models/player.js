const Model = require('objection').Model;
const Task_Status = require('./task_status');
const Hardship_Status = require('./hardship_status');


class Player extends Model {
  static get tableName() {
    return 'player';
  }

  static get relationMappings() {
    return {
      game: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/game',
        join: {
          from: 'player.game_id',
          to: 'game.id'
        }
      },
      task_statuses: {
        relation: Model.HasManyRelation,
        modelClass: Task_Status,
        join: {
          from: 'player.id',
          to: 'task_status.player_id'
        }
      },
      hardship_statuses: {
        relation: Model.HasManyRelation,
        modelClass: Hardship_Status,
        join: {
          from: 'player.id',
          to: 'hardship_status.player_id'
        }
      }
    };
  }
}

module.exports = Player;
