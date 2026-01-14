const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  env:process.env.NODE_ENV || 'dev',
  port:process.env.PORT || 3000,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

module.exports = pool;