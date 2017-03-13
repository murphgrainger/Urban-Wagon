const knex = require('./knex');

module.exports = {
  // Return a promise that gets all breweries
  postNewGame: function(body) {
    return knex('job')
      .insert({
        date_started: body.date_started,
        location: body.location,
        player_count: body.player_count,
        difficulty: body.difficulty,
        progress: 'Started'
      }, 'id');
  }
};
