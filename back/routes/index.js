const express = require("express");
const router = express();

const Product = require("../models/Product");
const User = require("../models/User");

const passport = require("passport");

router.post("/signup", (req, res, next) => {
  console.log(req.body);
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/logIn", passport.authenticate("local"), function(req, res) {
  console.log(req.user);
  res.send(req.user);
});

router.get("/products", (req, res, next) => {
  Product.findAll().then(products => {
    res.json(products);
  });
});

router.get("/product/:name", (req, res, next) => {
  console.log("---------------------------------------------------");
  console.log(req.params.name);
  // console.log(req.body);
  console.log("---------------------------------------------------");

  Product.findOne({
    where: {
      name: req.params.name
    }
  }).then(singleProduct => {
    res.send(singleProduct);
  });
});

module.exports = router;
