const db = require("../db")
class ProductController {

    async createProduct(req, res) {
        const {name, price, strength, weakness, term_of_use, positive_review, negative_review, cheap_alternative, expensive_alternative, own_experience, is_core, is_quiet_hero, picture, brand_id} =  req.body;
        const newProduct = await db.query("INSERT INTO products (name, price, strength, weakness, term_of_use, positive_review, negative_review, cheap_alternative, expensive_alternative, own_experience, is_core, is_quiet_hero, picture, brand_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *", [name, price, JSON.stringify(strength), JSON.stringify(weakness), term_of_use, positive_review, negative_review, cheap_alternative, expensive_alternative, own_experience, is_core, is_quiet_hero, picture, brand_id])
        res.json(newProduct.rows[0])
    }

    async getProducts(req, res) {
        const products = await db.query("SELECT * FROM products")
        res.json(products.rows)
    }

    async getOneProduct(req, res) {
        const id = req.params.id;
        const product = await db.query("Select * FROM products where id = $1", [id])
        res.json(product.rows[0])
    }

    async updateProduct(req, res) {
        const {name, price, strength, weakness, term_of_use, positive_review, negative_review, cheap_alternative, expensive_alternative, own_experience, is_core, is_quiet_hero, picture, brand_id} = req.body;
        const id = req.params.id;
        const updatedProduct = await db.query ("UPDATE products set name = $1, price = $2, strength = $3, weakness = $4, term_of_use = $5, positive_review = $6, negative_review = $7, cheap_alternative = $8, expensive_alternative = $9, own_experience = $10, is_core = $11, is_quiet_hero = $12, picture = $13, brand_id = $14  where id = $15 RETURNING *", [name, price, strength, weakness, term_of_use, positive_review, negative_review, cheap_alternative, expensive_alternative, own_experience, is_core, is_quiet_hero, picture, brand_id, id]);
        res.json(updatedProduct.rows[0])
    }
    
    async deleteProduct(req, res) {
        const id = req.params.id;
        const brand = await db.query("DELETE FROM products where id = $1", [id]);
        res.json(brand.rows[0])
    }
    // також додав останнім
    async getProductsByCountrySegmentBrand(req, res) {
      const { countryId, segmentId, brandId } = req.query;
      const products = await db.query(
        `SELECT p.* 
         FROM products p
         JOIN brands b ON p.brand_id = b.id
         WHERE b.country_id = $1 AND b.segment_id = $2 AND b.id = $3`,
        [countryId, segmentId, brandId]
      );
      res.json(products.rows);
  }
  
    async searchProducts(req, res) {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ message: "Параметр name обов'язковий" });
        }
        const products = await db.query(
            `SELECT * FROM products WHERE name ILIKE $1 LIMIT 50`,
            [`%${name}%`] // частковий пошук, нечутливий до регістру
        );
        res.json(products.rows);
}
  
}

module.exports = new ProductController()