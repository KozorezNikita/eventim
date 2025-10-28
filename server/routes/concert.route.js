const Router = require("express");
const router = new Router();
const concertController = require("../controllers/concert.controller");

router.post("/concerts", concertController.createConcert);
router.get("/concerts", concertController.getConcerts);
router.get("/concerts/:id", concertController.getOneConcert);
router.put("/concerts/:id", concertController.updateConcert);
router.delete("/concerts/:id", concertController.deleteConcert);

module.exports = router;
