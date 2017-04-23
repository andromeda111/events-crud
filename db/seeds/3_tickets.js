
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tickets').then(() => {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          id: 1,
          name: 'Ticket 1',
          price: 20,
          events_id: 1,
        },
        {
          id: 2,
          name: 'Ticket 2',
          price: 30,
          events_id: 2,
        },
        {
          id: 3,
          name: 'Ticket 3',
          price: 40,
          events_id: 3,
        },
        {
          id: 4,
          name: 'Ticket 4',
          price: 40,
          events_id: 3,
        },
        {
          id: 5,
          name: 'Ticket 5',
          price: 50,
          events_id: 1,
        }
      ])
    })
}
