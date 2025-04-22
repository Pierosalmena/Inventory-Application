const pool = require("./pool");

async function getAllProducts() {
    const {rows} = await pool.query(`SELECT
  products.article_id,
  products.product_name,
  products.price,
  brand.name AS brand_name,
  category.name AS category_name
FROM products
LEFT JOIN brand    ON products.brand_id = brand.brand_id
LEFT JOIN category ON products.category_id = category.category_id`);
    return rows;
}

async function insertNewProduct(product) {
    await pool.query("INSERT INTO products (product) VALUES ($1)", [product]);
}
// async function deleteProduct(product) {
//     await pool.query("DELETE FROM products")
// }

async function viewProducts() {
    const {rows} = await pool.query("SELECT * FROM products")
    return rows;
}

async function viewBrands(){
    const {rows} = await pool.query("SELECT * FROM brand");
    return rows;
}

async function viewStock(){
    const {rows} = await pool.query("SELECT * FROM stock")
    return rows;
}

async function viewCategory(){
    const {rows} = await pool.query("SELECT * FROM category");
    return rows;
}

async function viewBrand(){
    const {rows} = await pool.query("SELECT * FROM brand");
    return rows;
}

async function viewSingleProduct(id){
    const {rows} = await pool.query("SELECT * FROM products WHERE article_id = $1", [id])
    return rows
}

async function updateArticle(article_id, product_name, price, brand_id, category_id) {
    await pool.query(
      `UPDATE products
       SET product_name = $1,
           price = $2,
           brand_id = $3,
           category_id = $4
       WHERE article_id = $5`,
      [product_name, price, brand_id, category_id, article_id]
    );
  }

  async function addArticle(product_name, price, brand_id, category_id) {
    await pool.query(
      `INSERT INTO products(product_name,
           price,
           brand_id,
           category_id)
       VALUES ($1,
           $2,
           $3,
           $4)`,
      [product_name, price, brand_id, category_id]
    );
  }

  async function deleteRow(article_id) {
    await pool.query(
      'DELETE FROM products WHERE article_id = $1',
      [article_id]
    );
  }

module.exports = {getAllProducts, insertNewProduct, viewBrands, viewStock, viewCategory, viewBrand, viewSingleProduct, updateArticle, deleteRow, addArticle, viewProducts}