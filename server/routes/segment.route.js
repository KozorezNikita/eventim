const Router = require("express")
const router = new Router()
const segmentController =  require("../controllers/segment.controller")

router.post("/segment", segmentController.createSegment)
router.get("/segment", segmentController.getSegments)
router.get("/segment/:id", segmentController.getOneSegment)
router.put("/segment/:id", segmentController.updateSegment)
router.delete("/segment/:id", segmentController.deleteSegment)


module.exports = router