
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tickets_attendees').del().then(() => {
    return knex('attendees').del().then(() => {
      return knex('tickets').del().then(() => {
        return knex('events').del().then(() => {
          return knex('venues').del()
        })
      })
    })
  })
}
