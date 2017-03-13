const bookshelf = require('./bookshelf_config');
const Goal = require('./goalModel')
const Hardship_Status = require('./hardship_statusModel')

const Hardship = bookshelf.Model.extend({
  tableName: 'hardship',
  goals: function() {
    return this.belongsTo(Goal, 'goal');
  },

  hardship_statuses: function() {
    return this.hasMany(Hardship_Status, 'hardship_status');
  }

});

module.exports = ('Hardship', Hardship);
