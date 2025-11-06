const db = require("../db");

class ConcertController {
  // 🟢 Створення нового концерту (або музею)
  async createConcert(req, res) {
    try {
      const { name, country, location, date, price, picture, gumroad } = req.body;

      const newConcert = await db.query(
        `INSERT INTO concerts (name, country, location, date, price, picture, gumroad)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *`,
        [name, country, location, date, price, picture, gumroad]
      );

      res.json(newConcert.rows[0]);
    } catch (error) {
      console.error("❌ Помилка при створенні концерту:", error);
      res.status(500).json({ message: "Помилка при створенні концерту" });
    }
  }

  // 🟡 Отримання всіх концертів
  async getConcerts(req, res) {
    try {
      const concerts = await db.query("SELECT * FROM concerts ORDER BY id ASC");
      res.json(concerts.rows);
    } catch (error) {
      console.error("❌ Помилка при отриманні концертів:", error);
      res.status(500).json({ message: "Помилка при отриманні концертів" });
    }
  }

  // 🔵 Отримання одного концерту за ID
  async getOneConcert(req, res) {
    try {
      const id = req.params.id;
      const concert = await db.query("SELECT * FROM concerts WHERE id = $1", [id]);

      if (concert.rows.length === 0) {
        return res.status(404).json({ message: "Концерт не знайдено" });
      }

      res.json(concert.rows[0]);
    } catch (error) {
      console.error("❌ Помилка при отриманні концерту:", error);
      res.status(500).json({ message: "Помилка при отриманні концерту" });
    }
  }

  // 🟠 Оновлення концерту
  async updateConcert(req, res) {
    try {
      const id = req.params.id;
      const { name, country, location, date, price, picture, gumroad } = req.body;

      const updatedConcert = await db.query(
        `UPDATE concerts
         SET name = $1, country = $2, location = $3, date = $4, price = $5, picture = $6, gumroad = $7
         WHERE id = $8
         RETURNING *`,
        [name, country, location, date, price, picture, gumroad, id]
      );

      if (updatedConcert.rows.length === 0) {
        return res.status(404).json({ message: "Концерт не знайдено" });
      }

      res.json(updatedConcert.rows[0]);
    } catch (error) {
      console.error("❌ Помилка при оновленні концерту:", error);
      res.status(500).json({ message: "Помилка при оновленні концерту" });
    }
  }

  // 🔴 Видалення концерту
  async deleteConcert(req, res) {
    try {
      const id = req.params.id;
      const deleted = await db.query("DELETE FROM concerts WHERE id = $1 RETURNING *", [id]);

      if (deleted.rows.length === 0) {
        return res.status(404).json({ message: "Концерт не знайдено" });
      }

      res.json({ message: "Концерт успішно видалено" });
    } catch (error) {
      console.error("❌ Помилка при видаленні концерту:", error);
      res.status(500).json({ message: "Помилка при видаленні концерту" });
    }
  }
}

module.exports = new ConcertController();
