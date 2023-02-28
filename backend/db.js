const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jackpalmer',
  database: 'quiz',
  port: 5432,
  host: 'localhost',
});

module.exports = pool;
