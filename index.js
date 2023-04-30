const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/category.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon news running on server!");
});

// all categories data
app.get("/categories", (req, res) => {
  res.send(categories);
});

// all news data
app.get("/news", (req, res) => {
  res.send(news);
});

// news by id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id == id);
  res.send(selectedNews);
});

// news by category
app.get("/categories/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  if (categoryId == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter(
      (n) => parseInt(n.category_id) === categoryId
    );
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Sever is running on ${port}`);
});
