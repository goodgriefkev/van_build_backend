const knex = require('./knex'); //referencing file in this directory specifically

module.exports = {
  getOne(id) {
    return knex('users')
    .where('id', id)
    .first();
  },
  getOneByEmail: function (email) {
    return knex('users').where('email', email).first();
  },
  create: function(user) {
    return knex('users')
      .insert(user, 'id')
      .then(ids => {
        return ids[0];
      })
  }
};
