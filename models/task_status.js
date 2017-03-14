const Model = require('objection').Model;

class Task_Status extends Model {
  static get tableName() {
    return 'task_status';
  }

  static get relationMappings() {
    return {
      task: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/task',
        join: {
          from: 'task_status.task_id',
          to: 'task.id'
        }
      },
      player: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/player',
        join: {
          from: 'task_status.player_id',
          to: 'player.id'
        }
      }
    };
  }
}

module.exports = Task_Status;
