const db = require('../db/queries');

async function displayBrand(req, res) {
    const products = await db.viewBrand();
    const header = Object.keys(products[0]);
    res.render('brand', {products, header})
}

module.exports = {displayBrand};