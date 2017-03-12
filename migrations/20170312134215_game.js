exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', function(table) {
    table.increments();
    table.text('location');
    table.timestamp('date_started');
    table.integer('difficulty').notNullable();
    table.integer('player_count').notNullable();
    table.integer('progress').notNullable();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gmame');
};
