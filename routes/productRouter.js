const {Router} = require("express");
const { displayProducts, showSingleProduct, updateProductsArticle } = require("../controllers/productsController")

const productRouter = Router();

productRouter.get("/products", displayProducts)
productRouter.get("/products/:id/edit", showSingleProduct)
productRouter.post("/products/:id/edit", updateProductsArticle )

module.exports = productRouter;