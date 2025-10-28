const db = require("../db");

class ConcertController {
    // 🟢 Створення нового концерту
    async createConcert(req, res) {
        try {
            const { name, country, location, date, price, picture } = req.body;
            const newConcert = await db.query(
                `INSERT INTO concerts (name, country, location, date, price, picture)
                 VALUES ($1, $2, $3, $4, $5, $6)
                 RETURNING *`,
                [name, country, location, date, price, picture]
            );
            res.json(newConcert.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Помилка при створенні концерту" });
        }
    }

    // 🟡 Отримання всіх концертів
    async getConcerts(req, res) {
        try {
            const concerts = await db.query("SELECT * FROM concerts ORDER BY id ASC");
            res.json(concerts.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Помилка при отриманні концертів" });
        }
    }

    // 🔵 Отримання одного концерту за ID
    async getOneConcert(req, res) {
        try {
            const id = req.params.id;
            const concert = await db.query("SELECT * FROM concerts WHERE id = $1", [id]);
            res.json(concert.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Помилка при отриманні концерту" });
        }
    }

    // 🟠 Оновлення концерту
    async updateConcert(req, res) {
        try {
            const id = req.params.id;
            const { name, country, location, date, price, picture } = req.body;
            const updatedConcert = await db.query(
                `UPDATE concerts
                 SET name = $1, country = $2, location = $3, date = $4, price = $5, picture = $6
                 WHERE id = $7
                 RETURNING *`,
                [name, country, location, date, price, picture, id]
            );
            res.json(updatedConcert.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Помилка при оновленні концерту" });
        }
    }

    // 🔴 Видалення концерту
    async deleteConcert(req, res) {
        try {
            const id = req.params.id;
            await db.query("DELETE FROM concerts WHERE id = $1", [id]);
            res.json({ message: "Концерт видалено успішно" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Помилка при видаленні концерту" });
        }
    }
}

module.exports = new ConcertController();
