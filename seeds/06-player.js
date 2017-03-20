exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM player; ALTER SEQUENCE player_id_seq RESTART WITH 1;')
    .then(function() {
      const player = [{
        trail_name: 'Johnny',
        morale: 'Great',
        rest_count: 0,
        game_id: 1,
      }, {
        trail_name: 'Susie',
        morale: 'Great',
        rest_count: 0,
        game_id: 1,
      }, {
        trail_name: 'Georgiana',
        morale: 'Great',
        rest_count: 0,
        game_id: 2,
      }, {
        trail_name: 'Marni',
        morale: 'Great',
        rest_count: 0,
        game_id: 2,
      }, {
        trail_name: 'Carol',
        morale: 'Great',
        rest_count: 0,
        game_id: 2
      }];
      return knex('player').insert(player);
    });
};
