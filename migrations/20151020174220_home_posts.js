exports.up = function(knex, Promise) {
  return knex.schema.createTable('home_posts', function(table) {
    table.increments('id').primary();
    table.string('title');
    table.string('content');
  });  
};

exports.down = function(knex, Promise) {
  
};
