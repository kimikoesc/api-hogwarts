
exports.up = function(knex, Promise) {
  return knex.schema.createTable('houses', function(table) {
    table.increments('id').notNullable();
    table.string('house_name').notNullable();
    table.string('founder').notNullable();
    table.string('animal').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('houses');
};