var bookshelf = require('../lib/bookshelf');
var knex = bookshelf.knex;

knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
});