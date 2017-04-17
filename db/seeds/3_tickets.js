
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tickets').then(() => {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          id: 1,
          name: 'Ticket 1 for event 1',
          price: 150,
          events_id: 1,
        },
        {
          id: 2,
          name: 'Ticket 2',
          price: 250,
          events_id: 2,
        },
        {
          id: 3,
          name: 'Ticket 3',
          price: 350,
          events_id: 3,
        },
        {
          id: 4,
          name: 'Ticket 4 for event 3',
          price: 450,
          events_id: 3,
        },
        {
          id: 5,
          name: 'Ticket 5 for event 1',
          price: 550,
          events_id: 1,
        }
      ])
    })
}
