
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          email: 'vandude@yahoo.com',
          password: 'pass',
          created_at: new Date()
        },
        {
          id: 2,
          email: 'vangal@gmail.com',
          password: 'pass',
          created_at: new Date()
        },
        {
          id: 3,
          email: 'test@test.com',
          password: 'test',
          created_at: new Date()
        }
      ]);
    });
};
