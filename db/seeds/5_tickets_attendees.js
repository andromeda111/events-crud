
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tickets_attendees').then(() => {
      // Inserts seed entries
      return knex('tickets_attendees').insert([
        {
          id: 1,
          tickets_id: 1,
          attendees_id: 1
        },
        {
          id: 2,
          tickets_id: 2,
          attendees_id: 2
        },
        {
          id: 3,
          tickets_id: 3,
          attendees_id: 3
        },
        {
          id: 4,
          tickets_id: 4,
          attendees_id: 1
        },
        {
          id: 5,
          tickets_id: 5,
          attendees_id: 1
        }
      ])
    })
}
