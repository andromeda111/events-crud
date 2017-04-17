
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendees').then(() => {
      // Inserts seed entries
      return knex('attendees').insert([
        {
          id: 1,
          preferred_name: 'name 1',
          last_name: 'last name',
          birthday: '2/23/1989',
          email: 'test@test.com',
        },
        {
          id: 2,
          preferred_name: 'name 2',
          last_name: 'last name',
          birthday: '2/23/1989',
          email: 'test@test.com',
        },
        {
          id: 3,
          preferred_name: 'name 3',
          last_name: 'last name',
          birthday: '2/23/1989',
          email: 'test@test.com',
        },
        {
          id: 4,
          preferred_name: 'name 4',
          last_name: 'last name',
          birthday: '2/23/1989',
          email: 'test@test.com',
        }
      ])
    })
}
