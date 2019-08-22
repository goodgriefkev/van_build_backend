const knex = require('./knex'); //referencing file in this directory specifically

module.exports = {
  getOne(id) {
    return knex('user')
    .where('id', id)
    .first();
  }
};
