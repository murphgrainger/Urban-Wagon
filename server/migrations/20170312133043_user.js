exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').unique().notNullable();
    table.text('phone').unique().notNullable();
    table.text('username').notNullable();
    table.text('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
