const { Pool } = require("pg");

const isHeroku = process.env.DATABASE_URL ? true : false;

const pool = new Pool(
  isHeroku
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }, // для Heroku
      }
    : {
        user: "postgres",
        password: "lacazette10!",
        host: "localhost",
        port: 5432,
        database: "concert",
      }
);

async function checkConcerts() {
  try {
    const res = await pool.query("SELECT * FROM concerts");
    console.table(res.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

checkConcerts();