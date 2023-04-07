const express = require("express");
const cors = require("cors");
const lists = require("./file/lists.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Second vercel server is running");
});

app.get("/lists", (req, res) => {
  res.send(lists);
});

app.get("/lists/:id", (req, res) => {
  const id = req.params.id;
  const list = lists.find((li) => li.id == id);
  res.send(list);
});

app.listen(port, () => {
  console.log(`vercel server is running on ${port} `);
});
