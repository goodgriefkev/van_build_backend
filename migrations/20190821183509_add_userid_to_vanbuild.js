
exports.up = function(knex) {
  return knex.schema.table('vanbuild', function(table) {
    table.integer('user_id').references('id').inTable('user').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema.table('vanbuild', function(table) {
    table.dropColumn('user_id')
  })
};
