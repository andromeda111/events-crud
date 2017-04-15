
exports.up = function(knex) {
  return knex.schema.createTable('attendees', table => {
    table.increments()
    table.string('preferred_name')
    table.string('last_name')
    table.date('birthday')
    table.string('email')
    table.integer('tickets_id').references('tickets.id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('attendees')
}
