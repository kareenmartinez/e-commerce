const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/db");

const Product = require("./models/Product");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public"));
});

db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch(error => {
    console.log(error);
  });
