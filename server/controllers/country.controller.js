const db = require("../db")
class CountryController {

    async createCountry(req, res) {
        const {name} =  req.body;
        const newCountry = await db.query("INSERT INTO countries (name) values ($1) RETURNING *", [name])
        res.json(newCountry.rows[0])
    }

    async getCountries(req, res) {
        const countries = await db.query("SELECT * FROM countries")
        res.json(countries.rows)
    }

    async getOneCountry(req, res) {
        const id = req.params.id;
        const country = await db.query("Select * FROM countries where id = $1", [id])
        res.json(country.rows[0])
    }

    async updateCountry(req, res) {
        const {name} = req.body;
        const id = req.params.id;
        const updatedCountry = await db.query ("UPDATE countries set name = $1 where id = $2 RETURNING *", [name, id]);
        res.json(updatedCountry.rows[0])
    }
    
    async deleteCountry(req, res) {
        const id = req.params.id;
        const country = await db.query("DELETE FROM countries where id = $1", [id]);
        res.json(country.rows[0])
    }
}

module.exports = new CountryController()