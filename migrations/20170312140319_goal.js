exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', function(table) {
    table.increments();
    table.text('name').unique();
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goal');
};
