// server/migrate.js
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgres://u8rontnmf4babp:pf23d36c6b50903849c080965ee1e64f8bf94ee1443029329e9a51e80fd479f4b@c9n6qtf5jru089.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dab64o4kt3q458?sslmode=require",
  ssl: { rejectUnauthorized: false },
});

// Дані концертів з gumroad
const concerts = [
  // р4
  {
    id: 1,
    name: "Apache 207",
    country: "Frankfurt",
    location: "Westfalenhalle",
    date: "2025-11-30",
    price: "49",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/apache207_Kat4Sitz?wanted=true"
  },
  {
    id: 2,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-21",
    price: "49",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/westfalenhalledortmund?wanted=true"
  },
  {
    id: 3,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-22",
    price: "49",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/apache207dortmund_Kat4Sitz?wanted=true"
  },

  // р3
  {
    id: 4,
    name: "Lady Gaga",
    country: "Berlin",
    location: "Uber Arena",
    date: "2025-11-04",
    price: "39",
    picture: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/lady_gaga_judas.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/uberarenaberlin?wanted=true"
  },
  {
    id: 5,
    name: "Lady Gaga",
    country: "Berlin",
    location: "Uber Arena",
    date: "2025-11-05",
    price: "39",
    picture: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/lady_gaga_judas.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/uberarenaberlin05?wanted=true"
  },
  {
    id: 6,
    name: "OneRepublic (+ Ella Henderson)",
    country: "Munich",
    location: "Olympiahalle",
    date: "2025-11-09",
    price: "62",
    picture: "https://armyinform.com.ua/wp-content/uploads/2022/04/onerepublic-5a712793eb97de0037466221.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/onerepubl?wanted=true"
  },
  {
    id: 7,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-21",
    price: "55",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/apache207eticket?wanted=true"
  },
  {
    id: 8,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-22",
    price: "55",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/apachearenatour?wanted=true"
  },
  {
    id: 9,
    name: "Apache 207",
    country: "Frankfurt",
    location: "Westfalenhalle",
    date: "2025-11-30",
    price: "55",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/apache207frankfurt?wanted=true"
  },

  // р2
  {
    id: 10,
    name: "Lady Gaga",
    country: "Berlin",
    location: "Uber Arena",
    date: "2025-11-04",
    price: "84",
    picture: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/lady_gaga_judas.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/uberarenaberlinladygaga?wanted=true"
  },
  {
    id: 11,
    name: "Lady Gaga",
    country: "Berlin",
    location: "Uber Arena",
    date: "2025-11-05",
    price: "84",
    picture: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/lady_gaga_judas.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/ladygagauberarena?wanted=true"
  },

  // р1
  {
    id: 12,
    name: "Lady Gaga",
    country: "Berlin",
    location: "Uber Arena",
    date: "2025-11-04",
    price: "126",
    picture: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/lady_gaga_judas.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/ladygagauberarenaa?wanted=true"
  },
  {
    id: 13,
    name: "Lady Gaga",
    country: "Berlin",
    location: "Uber Arena",
    date: "2025-11-05",
    price: "126",
    picture: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/lady_gaga_judas.jpg",
    gumroad: "https://etiticepowo.gumroad.com/l/uberarenaladygagae-ticket?wanted=true"
  },
  {
    id: 14,
    name: "OneRepublic (+ Ella Henderson)",
    country: "Munich",
    location: "Olympiahalle",
    date: "2025-11-09",
    price: "70",
    picture: "https://armyinform.com.ua/wp-content/uploads/2022/04/onerepublic-5a712793eb97de0037466221.jpg",
    gumroad: "https://motewewale.gumroad.com/l/onerepublicmunich?wanted=true"
  },
  {
    id: 15,
    name: "Apache 207",
    country: "Frankfurt",
    location: "Westfalenhalle",
    date: "2025-11-30",
    price: "67",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/apache207arenatour?wanted=true"
  },
  {
    id: 16,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-21",
    price: "67",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/apache207_dortmund?wanted=true"
  },
  {
    id: 17,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-22",
    price: "67",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/dortmund_apache207?wanted=true"
  },

  // Стоячие
  {
    id: 18,
    name: "OneRepublic (+ Ella Henderson)",
    country: "Munich",
    location: "Olympiahalle",
    date: "2025-11-09",
    price: "66",
    picture: "https://armyinform.com.ua/wp-content/uploads/2022/04/onerepublic-5a712793eb97de0037466221.jpg",
    gumroad: "https://motewewale.gumroad.com/l/Olympiahalle_OneRepublic?wanted=true"
  },
  {
    id: 19,
    name: "Apache 207",
    country: "Frankfurt",
    location: "Westfalenhalle",
    date: "2025-11-30",
    price: "60",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/Apache207Stehplatz?wanted=true"
  },
  {
    id: 20,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-21",
    price: "60",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://motewewale.gumroad.com/l/Apache207StehplatzDortmund?wanted=true"
  },
  {
    id: 21,
    name: "Apache 207",
    country: "Dortmund",
    location: "Westfalenhalle",
    date: "2025-11-22",
    price: "60",
    picture: "https://laut.de/Apache-207/apache-207-205339.jpg",
    gumroad: "https://odaduqu.gumroad.com/l/StehplatzDortmundApache207?wanted=true"
  },

  // Одиночные
  {
    id: 22,
    name: "SDP",
    country: "Munich",
    location: "Olympiahalle",
    date: "2025-11-07",
    price: "53",
    picture: "https://2wjyoqczplq2loncx0jfrnk1q5w-thumbnail.storage.muc1.de.bnerd.com/thumbnail/de/Veranstaltungen/2025/SDP/8299/image-thumb__8299__thumbnail-event-teaser-1/SDP_pressebild_web_byRobertHirschmann%26bdxmedia.2d187496.webp",
    gumroad: "https://odaduqu.gumroad.com/l/SDP_Olympiahalle?wanted=true"
  },
  {
    id: 23,
    name: "SDP",
    country: "Munich",
    location: "Olympiahalle",
    date: "2025-11-08",
    price: "53",
    picture: "https://2wjyoqczplq2loncx0jfrnk1q5w-thumbnail.storage.muc1.de.bnerd.com/thumbnail/de/Veranstaltungen/2025/SDP/8299/image-thumb__8299__thumbnail-event-teaser-1/SDP_pressebild_web_byRobertHirschmann%26bdxmedia.2d187496.webp",
    gumroad: "https://odaduqu.gumroad.com/l/Munich_Olympiahalle_SDP?wanted=true"
  },
  {
    id: 24,
    name: "The Witcher in Concert",
    country: "Munich",
    location: "Olympiapark",
    date: "2025-11-12",
    price: "35",
    picture: "https://thumbor.factoryinternational.org/DZNK4KBMZI8YWqiYTVoeZktzhWs=/adaptive-fit-in/800x1200/filters:format(webp):quality(60)/https://publicydn4hdgozyjrg.blob.core.windows.net/public/dd/images/TheWitcherInConcert_1x1.a7ea428.jpg",
    gumroad: "https://odaduqu.gumroad.com/l/TheWitcherinConcert_Olympiapark?wanted=true"
  },
  {
    id: 25,
    name: "Tom Odell",
    country: "Munich",
    location: "Olympiahalle",
    date: "2025-11-14",
    price: "55",
    picture: "https://content.api.news/v3/images/bin/52e60239bcd0a08e1977f8b2d3c0ea35",
    gumroad: "https://odaduqu.gumroad.com/l/TomOdell_Munich_Olympiahalle?wanted=true"
  },
  {
    id: 26,
    name: "Vivaldi “Four Seasons”",
    country: "Berlin",
    location: "Französischer Dom",
    date: "2025-11-02",
    price: "31",
    picture: "https://faktypro.com.ua/uploads/img-2/15-cikavih-faktiv-pro-vivaldi.jpg",
    gumroad: "https://odaduqu.gumroad.com/l/Vivaldi_Berlin_FranzosischerDom?wanted=true"
  },
  {
    id: 27,
    name: "Vivaldi “Four Seasons”",
    country: "Berlin",
    location: "Französischer Dom",
    date: "2025-11-16",
    price: "31",
    picture: "https://faktypro.com.ua/uploads/img-2/15-cikavih-faktiv-pro-vivaldi.jpg",
    gumroad: "https://odaduqu.gumroad.com/l/FranzosischerDom_Vivaldi?wanted=true"
  }
];


async function migrate() {
  try {
    console.log("🔍 Перевірка наявності таблиці...");
    await pool.query(`
      CREATE TABLE IF NOT EXISTS concerts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        date TEXT NOT NULL,
        price VARCHAR(50) NOT NULL,
        picture TEXT NOT NULL
      );
    `);

    console.log("🔍 Перевірка типу колонки 'date'...");
    await pool.query(`
      ALTER TABLE concerts
      ALTER COLUMN date TYPE TEXT
      USING date::text;
    `);

    console.log("🔍 Перевірка наявності колонки 'gumroad'...");
    const colCheck = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name='concerts' AND column_name='gumroad';
    `);

    if (colCheck.rows.length === 0) {
      console.log("➕ Додаємо колонку 'gumroad'...");
      await pool.query(`
        ALTER TABLE concerts
        ADD COLUMN gumroad TEXT NOT NULL DEFAULT '';
      `);
    }

    console.log("🧹 Очищаємо старі записи...");
    await pool.query("DELETE FROM concerts;");

    console.log("📥 Вставляємо нові концерти...");
    for (const concert of concerts) {
      // гарантуємо, що date — це текст
      const dateText = typeof concert.date === "string"
        ? concert.date
        : new Date(concert.date).toISOString().split("T")[0];

      await pool.query(
        `
        INSERT INTO concerts (name, country, location, date, price, picture, gumroad)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `,
        [
          concert.name,
          concert.country,
          concert.location,
          dateText,
          concert.price,
          concert.picture,
          concert.gumroad,
        ]
      );
    }

    console.log(`✅ Успішно мігровано ${concerts.length} концертів.`);
  } catch (err) {
    console.error("❌ Помилка міграції:", err);
  } finally {
    await pool.end();
  }
}

migrate();
