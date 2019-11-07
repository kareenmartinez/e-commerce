const express = require("express");
const router = express();
<<<<<<< HEAD
const Products = require("../models/Product");

router.get("/products", function(req, res) {
  // direccion api/products
  Products.findAll()
    .then(products => res.json(products))
    .catch(function(err) {
      console.log(err);
    });
});

=======

>>>>>>> fe21a2841979f5f3e64d700aeff881000d7af725
module.exports = router;
