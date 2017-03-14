const Model = require('objection').Model;
const Goal = require('./goal')


function Task() {
  Model.apply(this, arguments);
}

Model.extend(Task);
module.exports = Task;

Task.tableName = 'task';


Task.relationMappings = {
  goals: {
    relation: Model.BelongsToOneRelation,
    modelClass: Goal,
    join: {
      from: 'task.goal_id',
      to: 'goal.id'
    }
  }
};
