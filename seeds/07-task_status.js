exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM task_status; ALTER SEQUENCE task_status_id_seq RESTART WITH 1;')
    .then(function() {
      const task_status = [{
        status: 'Unassigned',
        start_time: null,
        end_time: null,
        task_id: 1,
        player_id: null,
      }, {
        status: 'Unassigned',
        start_time: null,
        end_time: null,
        task_id: 2,
        player_id: null,
      }];
      return knex('task_status').insert(task_status);
    });
};
