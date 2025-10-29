// server/setupDB.js
const { Pool } = require("pg");

// Підключення до Heroku Postgres через DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // для Heroku
});

async function setup() {
  try {
    // Перевірка, чи існує таблиця concerts
    const res = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_name = 'concerts'
      );
    `);

    const exists = res.rows[0].exists;

    if (!exists) {
      console.log("Таблиця concerts відсутня. Створюємо...");
      await pool.query(`
        CREATE TABLE concerts (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          country VARCHAR(255) NOT NULL,
          location VARCHAR(255) NOT NULL,
          date TEXT NOT NULL,
          price DECIMAL NOT NULL,
          picture TEXT NOT NULL
        );
      `);
      console.log("✅ Таблиця concerts успішно створена.");
    } else {
      console.log("Таблиця concerts вже існує.");
    }

  } catch (err) {
    console.error("❌ Сталася помилка:", err);
  } finally {
    await pool.end();
  }
}

// Запуск
setup();