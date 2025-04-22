const db = require ("../db/queries");

async function displayProducts (req,res) {
    const products = await db.getAllProducts();
    const header = Object.keys(products[0])
    res.render('products', {products, header,  
        idField: 'article_id', 
        basePath: 'products' });
}

async function showSingleProduct(req, res) {
    const products = await db.viewSingleProduct(req.params.id)
    const header = Object.keys(products[0])
    res.render('singleProducts', {
        products, 
        header,
        idField: 'article_id', 
        basePath: 'products' });
}

async function updateProductsArticle(req,res) {
    const {
        article_id,
        product_name,
        price,
        brand_id,
        category_id
      } = req.body;
      await db.updateArticle(article_id,
        product_name,
        price,
        brand_id,
        category_id
      );
      res.redirect('/products')
}

async function deleteProduct(req, res) {
    const article_id = req.params.id;
    await db.deleteRow(article_id)
    res.redirect('/products')
}

async function populateColumn(req, res) {
    const products = await db.viewProducts();    
    const header = Object.keys(products[0]);
    res.render('addProduct', {
        products, 
        header,
        idField: 'article_id', 
        basePath: 'products' });
}

async function addProduct(req,res) {
    const {
        product_name,
        price,
        brand_id,
        category_id
      } = req.body;
      await db.addArticle(
        product_name,
        price,
        brand_id,
        category_id
      );
      res.redirect('/products')
}

module.exports = {displayProducts, showSingleProduct, updateProductsArticle, deleteProduct, addProduct, populateColumn}