const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // береться з Heroku
  ssl: {
    rejectUnauthorized: false // обов'язково для Heroku Postgres
  }
});

module.exports = pool;



/*


const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "lacazette10!",
    host: "localhost",
    port: 5432,
    database: "concert"
})

module.exports = pool

*/