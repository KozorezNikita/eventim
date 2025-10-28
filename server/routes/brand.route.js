const Router = require("express")
const router = new Router()
const brandController =  require("../controllers/brand.controller")

router.post("/brand", brandController.createBrand)
router.get("/brand", brandController.getBrands)
router.get("/brand/:id", brandController.getOneBrand)
router.put("/brand/:id", brandController.updateBrand)
router.delete("/brand/:id", brandController.deleteBrand)

router.get("/brands/filter", brandController.getBrandsByCountryAndSegment);


module.exports = router