
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').then(() => {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          title: 'Event 1 PAST',
          description: 'Venue 1, Past Event',
          over_21: true,
          start_datetime: '1/14/2017',
          end_datetime: '1/20/2017',
          venues_id: 1
        },
        {
          id: 2,
          title: 'Event 2 FUTURE',
          description: 'Venue 1, Future Event',
          over_21: true,
          start_datetime: '5/14/2017',
          end_datetime: '5/20/2017',
          venues_id: 1
        },
        {
          id: 3,
          title: 'Event 3 Past',
          description: 'Venue 1, Past Event 2',
          over_21: true,
          start_datetime: '3/14/2017',
          end_datetime: '3/20/2017',
          venues_id: 1
        }
      ])
    })
}
