
exports.up = function(knex) {
  return knex.schema.createTable('venues', table => {
    table.increments()
    table.string('name')
    table.integer('capacity')
    table.string('line_1')
    table.string('line_2')
    table.string('city')
    table.string('state')
    table.integer('zip')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('venues')
}
