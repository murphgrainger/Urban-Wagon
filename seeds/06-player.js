exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM player; ALTER SEQUENCE player_id_seq RESTART WITH 1;')
    .then(function() {
      const player = [{
        trail_name: 'Johnny',
        health: 'Great',
        game_id: 1,
      }, {
        trail_name: 'Susie',
        health: 'Great',
        game_id: 1,
      }, {
        trail_name: 'Georgiana',
        health: 'Great',
        game_id: 2,
      }, {
        trail_name: 'Marni',
        health: 'Great',
        game_id: 2,
      }, {
        trail_name: 'Carol',
        health: 'Great',
        game_id: 2
      }];
      return knex('player').insert(player);
    });
};
