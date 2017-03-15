exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM player; ALTER SEQUENCE player_id_seq RESTART WITH 1;')
    .then(function() {
      const player = [{
        trail_name: 'Johnny',
        health: 1,
        game_id: 1,
      }, {
        trail_name: 'Susie',
        health: 1,
        game_id: 1,
      }, {
        trail_name: 'Georgiana',
        health: 1,
        game_id: 2,
      }, {
        trail_name: 'Marni',
        health: 1,
        game_id: 2,
      }, {
        trail_name: 'Carol',
        health: 1,
        game_id: 2
      }];
      return knex('player').insert(player);
    });
};
