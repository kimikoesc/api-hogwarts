
exports.up = function(knex, Promise) {
return knex.schema.createTable('professors', function(table) {
    table.increments('id').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('gender').notNullable();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('professors');
};