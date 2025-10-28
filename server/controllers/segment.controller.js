const db = require("../db")
class SegmentController {

    async createSegment(req, res) {
        const {name} =  req.body;
        const newSegment = await db.query("INSERT INTO segments (name) values ($1) RETURNING *", [name])
        res.json(newSegment.rows[0])
    }

    async getSegments(req, res) {
        const segments = await db.query("SELECT * FROM segments")
        res.json(segments.rows)
    }

    async getOneSegment(req, res) {
        const id = req.params.id;
        const segment = await db.query("Select * FROM segments where id = $1", [id])
        res.json(segment.rows[0])
    }

    async updateSegment(req, res) {
        const {name} = req.body;
        const id = req.params.id;
        const updatedSegment = await db.query ("UPDATE segments set name = $1 where id = $2 RETURNING *", [name, id]);
        res.json(updatedSegment.rows[0])
    }
    
    async deleteSegment(req, res) {
        const id = req.params.id;
        const segment = await db.query("DELETE FROM segments where id = $1", [id]);
        res.json(segment.rows[0])
    }
}

module.exports = new SegmentController()