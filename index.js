const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require("./data/category.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Dragon news running on server!");
})

app.get("/categories", (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Sever is running on ${port}`);
})