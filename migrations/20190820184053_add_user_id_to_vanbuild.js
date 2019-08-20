
exports.up = function(knex, Promise) {
  knex.schema.table('vanbuild', function(table) {
    table.integer('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.table('vanbuild', function(table) {
    table.dropColumn('user_id');
  });
};
