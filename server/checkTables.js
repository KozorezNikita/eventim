const { Pool } = require("pg");

const isHeroku = !!process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: isHeroku ? process.env.DATABASE_URL : "postgres://postgres:lacazette10!@localhost:5432/concert",
  ssl: isHeroku ? { rejectUnauthorized: false } : false,
});

async function checkTables() {
  try {
    const res = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema='public'
    `);
    console.log("Tables in DB:", res.rows.map(r => r.table_name));
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
}

checkTables();
