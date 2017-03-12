exports.up = function(knex, Promise) {
  return knex.schema.createTable('task_status', function(table) {
    table.increments();
    table.text('status').notNullable();
    table.timestamp('start_time');
    table.timestamp('end_time');
    table.integer('task_id').references('task.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task_status');
};
