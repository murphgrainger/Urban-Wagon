exports.up = function(knex, Promise) {
  return knex.schema.createTable('hardship', function(table) {
    table.increments();
    table.text('title').notNullable();
    table.text('image');
    table.text('description').notNullable();
    table.integer('penalty_value');
    table.integer('allotted_time').notNullable();
    table.integer('goal_id').references('goal.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hardship');
};
