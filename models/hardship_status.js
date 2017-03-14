const Model = require('objection').Model;

class Hardship_Status extends Model {
  static get tableName() {
    return 'hardship_status';
  }

  static get relationMappings() {
    return {
      hardship: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/hardship',
        join: {
          from: 'hardship_status.hardship_id',
          to: 'hardship.id'
        }
      },
      player: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/player',
        join: {
          from: 'hardship_status.player_id',
          to: 'player.id'
        }
      }
    };
  }
}

module.exports = Hardship_Status;
