
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').then(() => {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          title: 'Event 1',
          description: 'description',
          over_21: true,
          start_datetime: '4/14/2017',
          end_datetime: '4/20/2017',
          venues_id: 1
        },
        {
          id: 2,
          title: 'Event 2',
          description: 'description',
          over_21: true,
          start_datetime: '5/14/2017',
          end_datetime: '5/20/2017',
          venues_id: 2
        },
        {
          id: 3,
          title: 'Event 3',
          description: 'description',
          over_21: true,
          start_datetime: '6/14/2017',
          end_datetime: '6/20/2017',
          venues_id: 3
        }
      ])
    })
}
