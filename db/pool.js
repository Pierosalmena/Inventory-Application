const {Pool} = require("pg");

module.exports = new Pool ({
    host: "localhost",
    user: "kompzen",
    database: "inventory",
    password: "1234",
    port: 5432
});