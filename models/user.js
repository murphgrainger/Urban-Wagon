const Model = require('objection').Model;
const Game = require('./game');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    return {
      games: {
        relation: Model.HasManyRelation,
        modelClass: Game,
        join: {
          from: 'user.id',
          to: 'game.user_id'
        }
      }
    };
  }
}

module.exports = User;
