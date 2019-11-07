const express = require("express");
const router = express();
const User = require("../models/User");

router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      console.log(err);
    });
});

const Product = require("../models/Product");

router.get("/products", (req, res, next) => {
  Product.findAll().then(products => {
    res.json(products);
  });
});

module.exports = router;
