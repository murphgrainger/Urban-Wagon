const Model = require('objection').Model;
const Task = require('./task')

function Goal() {
  Model.apply(this, arguments);
}

Model.extend(Goal);
module.exports = Goal;

Goal.tableName = 'goal';


Goal.relationMappings = {
  tasks: {
    relation: Model.HasManyRelation,
    modelClass: Task,
    join: {
      from: 'goal.id',
      to: 'task.goal_id'
    }
  }
};
