const knex = require('./knex');

module.exports = {
  // Return a promise that gets all breweries
  queryFunction: function() {
    return knex('table');
  }
};
