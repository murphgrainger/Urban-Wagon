exports.up = function(knex, Promise) {
  return knex.schema.createTable('goal', function(table) {
    table.increments();
    table.text('name').unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goal');
};
