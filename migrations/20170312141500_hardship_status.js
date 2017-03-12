exports.up = function(knex, Promise) {
  return knex.schema.createTable('hardship_status', function(table) {
    table.increments();
    table.text('status').notNullable();
    table.timestamp('start_time');
    table.timestamp('end_time');
    table.integer('hardship_id').references('hardship.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hardship_status');
};
