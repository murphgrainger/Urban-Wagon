const bookshelf = require('./bookshelf_config');
const Hardship = require('./hardshipModel');
const Player = require('./playerModel');

const Hardship_Status = bookshelf.Model.extend({
  tableName: 'hardship_status',
  hardships: function() {
    return this.belongsTo('Hardship');
  },
  players: function() {
    return this.belongsTo('Player');
  }

});

module.exports = bookshelf.model('Hardship_Status', Hardship_Status);
