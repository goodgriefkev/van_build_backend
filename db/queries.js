const knex = require('./knex'); //referencing file in this directory specifically

module.exports = {
  getAll() {
    return knex('vanbuild');
  }
}
