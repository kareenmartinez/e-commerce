const express = require("express");
const router = express();
const Product = require("../models/Product");

router.get("/products", function(req, res) {
  // direccion api/products
  Product.findAll()
    .then(products => res.json(products))
    .catch(function(err) {
      console.log(err);
    });
});

router.get("/category/:country", function(req, res) {
  // direccion api/
  Product.findAll({
    where: {
      country: req.params.country
    }
  })
    .then(products => res.json(products))
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
