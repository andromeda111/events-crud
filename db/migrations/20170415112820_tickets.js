
exports.up = function(knex) {
  return knex.schema.createTable('tickets', table => {
    table.increments()
    table.string('name')
    table.integer('price')
    table.integer('events_id').references('events.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tickets')
}
