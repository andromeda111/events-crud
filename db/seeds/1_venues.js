
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('venues').then(() => {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1,
          name: 'Showbox Sodo',
          capacity: 100,
          line_1: '1700 1st Ave S',
          line_2: '',
          city: 'Seattle',
          state: 'WA',
          zip: 98134
        },
        {
          id: 2,
          name: 'El Corazon',
          capacity: 100,
          line_1: '109 Eastlake Ave E',
          line_2: '',
          city: 'Seattle',
          state: 'WA',
          zip: 98109
        },
        {
          id: 3,
          name: 'Paramount Theater',
          capacity: 100,
          line_1: '911 Pine St',
          line_2: '',
          city: 'Seattle',
          state: 'WA',
          zip: 98101
        }
      ])
    })
}
