exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM game_goal; ALTER SEQUENCE game_goal_id_seq RESTART WITH 1;')
    .then(function() {
      const game_goal = [{
        id: 1,
        game_id: 1,
        goal_id: 1,

      }, {
        id: 2,
        game_id: 2,
        goal_id: 2,

      }];
      return knex('game_goal').insert(game_goal);
    });
};
