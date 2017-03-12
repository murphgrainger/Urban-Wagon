exports.up = function(knex, Promise) {
  return knex.schema.createTable('hardship', function(table) {
    table.increments();
    table.text('type');
    table.text('description').notNullable();
    table.integer('allotted_time').notNullable();
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hardship');
};
