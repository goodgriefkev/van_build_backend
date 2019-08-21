
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now());
    table.boolean('is_active').notNullable().defaultTo(true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
