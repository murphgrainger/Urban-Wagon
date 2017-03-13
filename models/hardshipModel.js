const bookshelf = require('./bookshelf_config');
const Goal = require('./goalModel')
const Hardship_Status = require('./hardship_statusModel')

const Hardship = bookshelf.Model.extend({
  tableName: 'hardship',
  goals: function() {
    return this.belongsTo('Goal');
  },

  hardship_statuses: function() {
    return this.hasMany('Hardship_Status');
  }

});

module.exports = bookshelf.model('Hardship', Hardship);
