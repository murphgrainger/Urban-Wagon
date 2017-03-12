exports.up = function(knex, Promise) {
  return knex.schema.createTable('hardship', function(table) {
    table.increments();
    table.text('title').notNullable();
    table.text('description').notNullable();
    table.text('type');
    table.integer('allotted_time').notNullable();
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hardship');
};
