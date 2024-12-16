// import 'dotenv/config';
require('dotenv').config();

const database = process.env.POSTGRES_DB || 'codilo-dt';
const host = process.env.POSTGRES_HOST || '127.0.0.1';
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const port = process.env.POSTGRES_PORT;

module.exports = {
  client: 'pg',
  debug: false,
  connection: {
    port,
    host,
    user: username,
    password,
    database,
    // ssl,
  },
};
