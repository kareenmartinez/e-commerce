const express = require("express");
const router = express();

const Product = require("../models/Product");

router.get("/products", (req, res, next) => {
  Product.findAll().then(products => {
    res.json(products);
  });
});

module.exports = router;
