
exports.up = function(knex) {
  return knex.schema.renameTable('user', 'users')
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
