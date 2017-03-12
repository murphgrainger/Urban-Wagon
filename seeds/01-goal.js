exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM goal; ALTER SEQUENCE goal_id_seq RESTART WITH 1;')
    .then(function() {
      const goal = [{
        id: 1,
        name: 'network',
      }, {
        id: 2,
        name: 'drink',
      }, {
        id: 3,
        name: 'laugh',
      }, {
        id: 4,
        name: 'flirt',
      }, {
        id: 5,
        name: 'friend'
      }];
      return knex('goal').insert(goal);
    });
};
