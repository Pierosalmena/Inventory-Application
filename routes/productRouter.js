const {Router} = require("express");
const { displayProducts, showSingleProduct, updateProductsArticle, deleteProduct, populateColumn, addProduct} = require("../controllers/productsController")

const productRouter = Router();

productRouter.get("/products", displayProducts)
productRouter.get("/products/:id/edit", showSingleProduct)
productRouter.post("/products/:id/edit", updateProductsArticle)
productRouter.post("/products/:id/delete", deleteProduct)
productRouter.get("/products/add", populateColumn)
productRouter.post("/products/add", addProduct)

module.exports = productRouter;