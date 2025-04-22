const db = require("../db/queries");

async function displayStock (req, res) {
    const products = await db.viewStock();
    const header = Object.keys(products[0]);
    res.render('stock', {products, header})
}

module.exports = {displayStock}