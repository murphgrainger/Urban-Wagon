exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', function(table) {
    table.increments();
    table.text('trail_name').unique();
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player');
};
