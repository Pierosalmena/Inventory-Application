const db = require('../db/queries');

async function displayCategory (req, res) {
    const products = await db.viewCategory();
    const header = Object.keys(products[0]);
    res.render('category', {products, header});
}

module.exports = {displayCategory};