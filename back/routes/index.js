const express = require("express");
const router = express();
const Product = require("../models/Product");
const User = require("../models/User");

const passport = require("passport");

router.post("/send", (req, res) => {
  console.log("ESTE ES EL REQ.BODY DEL SEND")
const output = `
<h1>Tu pedido ha sido confirmado y esta en camino</h1>
<h2>Detalles del envio:</h2>
<ul> 
<li>item:${req.body.name}</li>
</ul>
` 
});

router.post("/logIn", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

router.get("/products", function(req, res) {
  // direccion api/products
  Product.findAll()
    .then(products => res.json(products))
    .catch(function(err) {
      console.log(err);
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
      res.send("ERROR");
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

router.get("/products", (req, res, next) => {
  Product.findAll().then(products => {
    res.json(products);
  });
});
router.get("/logOut", (req, res) => {
  req.logout(); // passport method for logout
  res.sendStatus(202);
});

router.get("/product/:name", (req, res, next) => {
  console.log("---------------------------------------------------");
  console.log(req.params.name);
  console.log("---------------------------------------------------");

  Product.findOne({
    where: {
      name: req.params.name
    }
  }).then(singleProduct => {
    console.log(singleProduct);
    res.send(singleProduct);
  });
});

router.get("/auth/me", (req, res) => {
  console.log(req.user, "HOLAAAAAA");
  res.send(req.user);
});

module.exports = router;
