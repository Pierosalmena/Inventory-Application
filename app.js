const express = require("express");
const app = express();
// const indexRouter = require("./routes/indexRouter")
const productRouter = require("./routes/productRouter")
const stockRouter = require("./routes/stockRouter");
const categoryRouter = require("./routes/categoryRouter");
const brandRouter = require("./routes/brandRouter")

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// app.use("/", indexRouter)
app.use(express.urlencoded({ extended: true }));
app.use("/", productRouter );
app.use("/", stockRouter);
app.use("/", categoryRouter);
app.use("/", brandRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on Port ${PORT}`)
})