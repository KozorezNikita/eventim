// server/migrate.js
const { Pool } = require("pg");

// Підключення до Heroku Postgres
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Дані концертів
const concerts = [
    {
        "id": 1,
        "name": "Linkin Park",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/28/2/linkin-park-band-logo-png_seeklogo-287898.png"
    },
    {
        "id": 2,
        "name": "Imagine Dragons",
        "country": "Poland",
        "location": "Narodovyi",
        "date": "2026-10-12",
        "price": "145",
        "picture": "https://images.seeklogo.com/logo-png/51/2/imagine-dragons-logo-png_seeklogo-514972.png"
    },
    {
        "id": 3,
        "name": "Linkin Park",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/52/2/one-piece-wanted-poster-logo-png_seeklogo-520584.png"
    },
    {
        "id": 4,
        "name": "Linkin Park",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/5/2/flight-of-the-conchords-poster-logo-png_seeklogo-55820.png"
    },
    {
        "id": 5,
        "name": "Linkin Park",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/32/2/ronald-reagan-right-poster-logo-png_seeklogo-324539.png"
    },
    {
        "id": 6,
        "name": "Linkin Park",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/32/2/merry-christmas-poster-logo-png_seeklogo-322841.png"
    },
    {
        "id": 7,
        "name": "Artem Pivovarov",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/29/2/christmas-wish-poster-green-blue-elegant-logo-png_seeklogo-294090.png"
    },
    {
        "id": 8,
        "name": "Oscar Cortez",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/10/2/oscars-poster-2003-logo-png_seeklogo-104385.png"
    },
    {
        "id": 9,
        "name": "Alexandre Laca",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/29/2/vintage-maple-leaf-thanksgiving-poster-logo-png_seeklogo-293139.png"
    },
    {
        "id": 10,
        "name": "Nestor Arauj",
        "country": "USA",
        "location": "Madison Square Garden, New York",
        "date": "2025-12-15",
        "price": "120.5",
        "picture": "https://images.seeklogo.com/logo-png/53/2/poster-indonesia-merdeka-logo-png_seeklogo-536609.png"
    },
    {
        "id": 14,
        "name": "Muse",
        "country": "Poland",
        "location": "Bernabeu",
        "date": "2025-10-22",
        "price": "50",
        "picture": "https://images.seeklogo.com/logo-png/22/1/muse-knights-of-cydonia-logo-png_seeklogo-220525.png"
    }
]

async function migrate() {
  try {
    for (const concert of concerts) {
      await pool.query(
        `INSERT INTO concerts (name, country, location, date, price, picture)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [concert.name, concert.country, concert.location, concert.date, concert.price, concert.picture]
      );
    }
    console.log(`✅ Successfully migrated ${concerts.length} concerts`);
  } catch (err) {
    console.error("❌ Migration failed:", err);
  } finally {
    await pool.end();
  }
}

migrate();
