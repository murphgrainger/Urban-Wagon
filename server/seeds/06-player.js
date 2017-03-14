exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM player; ALTER SEQUENCE player_id_seq RESTART WITH 1;')
    .then(function() {
      const player = [{
        trail_name: 'Johnny',
        game_id: 1,
      }, {
        trail_name: 'Susie',
        game_id: 1,
      }, {
        trail_name: 'Georgiana',
        game_id: 2,
      }, {
        trail_name: 'Marni',
        game_id: 2,
      }, {
        trail_name: 'Carol',
        game_id: 2
      }];
      return knex('player').insert(player);
    });
};
