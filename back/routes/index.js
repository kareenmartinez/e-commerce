const express = require("express");
const router = express();
const Product = require("../models/Product");
const User = require("../models/User");

const passport = require("passport");

router.get("/products", function(req, res) {
  // direccion api/products
  Product.findAll()
    .then(products => res.json(products))
    .catch(function(err) {   console.log(err);
    });
});




router.post("/signup", (req, res, next) => {
  console.log(req.body.email, "HOLAAAA AUXILIOO no me VALIDAAAA");
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
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
    })});
router.post("/logIn", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

router.get("/products", (req, res, next) => {
  Product.findAll().then(products => {
    res.json(products);
  });
});

module.exports = router;
