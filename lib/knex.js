var path   = require('path')
var dbFile = path.join(__dirname, '../db/app.db')

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbFile
  }
})

module.exports = knex
