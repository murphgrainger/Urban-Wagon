const bookshelf = require('./bookshelf_config');
const Game = require('./gameModel')

const User = bookshelf.Model.extend({
  tableName: 'user',
  games: function() {
    return this.hasMany('Game');
  }
});

module.exports = bookshelf.model('User', User);
