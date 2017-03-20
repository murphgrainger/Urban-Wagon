exports.up = function(knex, Promise) {
  return knex.schema.createTable('hardship', function(table) {
    table.increments();
    table.text('title').notNullable();
    table.text('image');
    table.text('description').notNullable();
    table.text('button_1');
    table.text('button_2');
    table.integer('rest_value');
    table.integer('morale_decrease');
    table.integer('goal_id').references('goal.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hardship');
};
