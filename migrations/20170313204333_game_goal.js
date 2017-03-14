exports.up = function(knex, Promise) {
  return knex.schema.createTable('game_goal', function(table) {
    table.increments();
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
    table.integer('goal_id').references('goal.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game_goal');
};
