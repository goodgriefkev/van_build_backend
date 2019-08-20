
exports.up = function(knex, Promise) {
  knex.schema.table('users', function(table) {
    table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.table('users', function(table) {
    table.dropColumn('password');
  });
};
