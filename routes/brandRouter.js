const {Router} = require("express");
const {displayBrand} = require('../controllers/brandController');

const brandRouter = Router();

brandRouter.get("/brand", displayBrand);

module.exports = brandRouter