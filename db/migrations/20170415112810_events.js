
exports.up = function(knex) {
  return knex.schema.createTable('events', table => {
    table.increments()
    table.string('title')
    table.text('description')
    table.boolean('over_21')
    table.date('start_datetime')
    table.date('end_datetime')
    table.integer('venues_id').references('venues.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('events')
}
