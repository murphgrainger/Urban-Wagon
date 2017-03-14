exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM hardship_status; ALTER SEQUENCE hardship_status_id_seq RESTART WITH 1;')
    .then(function() {
      const hardship_status = [{
        status: 'Unassigned',
        start_time: null,
        end_time: null,
        hardship_id: 1,
        player_id: null,
      }, {
        status: 'Unassigned',
        start_time: null,
        end_time: null,
        hardship_id: 2,
        player_id: null,
      }];
      return knex('hardship_status').insert(hardship_status);
    });
};
