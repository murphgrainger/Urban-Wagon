exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM game; ALTER SEQUENCE game_id_seq RESTART WITH 1;')
    .then(function() {
      const game = [{
        access_code: 'GRAIN',
        location: 'Qualtrics Conferenece',
        date_started: new Date(),
        difficulty: 1,
        player_count: 2,
        progress: 0,
        user_id: 1,
        goal_id: 1
      }, {
        access_code: 'SHELBS',
        location: '10 Barrel Brewing',
        date_started: new Date(),
        difficulty: 2,
        player_count: 3,
        progress: 0,
        user_id: 2,
<<<<<<< HEAD
        goal_id: 2
=======
        goal_id: 4
>>>>>>> master
      }];
      return knex('game').insert(game);
    });
};
