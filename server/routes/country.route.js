const Router = require("express")
const router = new Router()
const countryController =  require("../controllers/country.controller")

router.post("/country", countryController.createCountry)
router.get("/country", countryController.getCountries)
router.get("/country/:id", countryController.getOneCountry)
router.put("/country/:id", countryController.updateCountry)
router.delete("/country/:id", countryController.deleteCountry)


module.exports = router