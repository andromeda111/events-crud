
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('venues').then(() => {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1,
          name: 'Venue 1',
          capacity: 100,
          line_1: 'line1',
          line_2: 'line2',
          city: 'city',
          state: 'state',
          zip: 98105
        },
        {
          id: 2,
          name: 'Venue 2',
          capacity: 100,
          line_1: 'line1',
          line_2: 'line2',
          city: 'city',
          state: 'state',
          zip: 98105
        },
        {
          id: 3,
          name: 'Venue 3',
          capacity: 100,
          line_1: 'line1',
          line_2: 'line2',
          city: 'city',
          state: 'state',
          zip: 98105
        }
      ])
    })
}
