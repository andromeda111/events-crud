
exports.up = function(knex) {
  return knex.schema.createTable('tickets_attendees', table => {
    table.increments()
    table.integer('tickets_id').references('tickets.id')
    table.integer('attendees_id').references('attendees.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tickets_attendees')
}
