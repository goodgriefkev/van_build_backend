const knex = require('./knex'); //referencing file in this directory specifically

module.exports = {
  getAll() {
    return knex('vanbuild');
  },
  getOne(id) {
    return knex('vanbuild')
    .where('id', id)
    .first();
  },
  create(vanbuild) {
    return knex('vanbuild')
    .insert(vanbuild, '*');
  }
};
