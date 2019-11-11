const express = require("express");
const router = express();
<<<<<<< HEAD
const Product = require("../models/Product");

router.get("/products", function(req, res) {
  // direccion api/products
  Product.findAll()
    .then(products => res.json(products))
    .catch(function(err) {
=======

const Product = require("../models/Product");
const User = require("../models/User");

const passport = require("passport");

router.post("/signup", (req, res, next) => {
  console.log(req.body.email, "HOLAAAA AUXILIOO no me VALIDAAAA");
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
>>>>>>> 93489add3e3e748a9c40e49f970647329ead6300
      console.log(err);
    });
});

<<<<<<< HEAD
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
=======
router.post("/logIn", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

router.get("/products", (req, res, next) => {
  Product.findAll().then(products => {
    res.json(products);
  });
>>>>>>> 93489add3e3e748a9c40e49f970647329ead6300
});

module.exports = router;
