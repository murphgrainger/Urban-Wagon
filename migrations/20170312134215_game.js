exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', function(table) {
    table.increments();
    table.text('access_code');
    table.text('location');
    table.timestamp('date_started');
    table.integer('difficulty');
    table.integer('player_count');
    table.integer('progress');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game');
};
