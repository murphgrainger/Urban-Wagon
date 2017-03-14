const bcrypt = require('bcryptjs');

var hash = bcrypt.hashSync('password', 8);

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1;')
    .then(function() {
      const user = [{
        first_name: 'Kiki',
        last_name: 'Grainger',
        email: 'kiki@example.com',
        phone: '970-481-3188',
        username: 'snikikiki',
        password: hash
      }, {
        first_name: 'Shelby',
        last_name: 'Trueax',
        email: 'shelby@example.com',
        phone: '123-456-7890',
        username: 'shelbstru',
        password: hash
      }];
      return knex('user').insert(user);
    });
};
