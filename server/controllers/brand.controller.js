const db = require("../db")
class BrandController {

    async createBrand(req, res) {
        const {name, picture, country_id, segment_id} =  req.body;
        const newBrand = await db.query("INSERT INTO brands (name, picture, country_id, segment_id) values ($1, $2, $3, $4) RETURNING *", [name, picture, country_id, segment_id])
        res.json(newBrand.rows[0])
    }

    async getBrands(req, res) {
        const brands = await db.query("SELECT * FROM brands")
        res.json(brands.rows)
    }

    async getOneBrand(req, res) {
        const id = req.params.id;
        const brand = await db.query("Select * FROM brands where id = $1", [id])
        res.json(brand.rows[0])
    }

    async updateBrand(req, res) {
        const {name, picture, country_id, segment_id} = req.body;
        const id = req.params.id;
        const updatedBrand = await db.query ("UPDATE brands set name = $1, picture = $2, country_id = $3, segment_id = $4 where id = $5 RETURNING *", [name, picture, country_id, segment_id, id]);
        res.json(updatedBrand.rows[0])
    }
    
    async deleteBrand(req, res) {
        const id = req.params.id;
        const brand = await db.query("DELETE FROM brands where id = $1", [id]);
        res.json(brand.rows[0])
    }
    //додав останнім
    async getBrandsByCountryAndSegment(req, res) {
      const { countryId, segmentId } = req.query;
      const brands = await db.query(
        "SELECT id, name, picture FROM brands WHERE country_id = $1 AND segment_id = $2",
        [countryId, segmentId]
      );
      res.json(brands.rows);
  }
}


module.exports = new BrandController()