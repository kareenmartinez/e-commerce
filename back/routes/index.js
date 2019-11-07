const express = require("express");
const router = express();
const Products = require("../models/Product");

router.get("/products", function(req, res) {
  // direccion api/products
  Products.findAll()
    .then(products => res.json(products))
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
