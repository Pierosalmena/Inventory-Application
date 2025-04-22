const {Router} = require("express");
const {displayStock} = require("../controllers/stockController");

const stockRouter = Router();

stockRouter.get("/stock", displayStock);

module.exports = stockRouter;