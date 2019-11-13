const express = require("express");
const router = express();
const { Product, Comment, User } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const passport = require("passport");

router.post("/logIn", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

router.get("/logOut", (req, res) => {
  req.logout(); // passport method for logout
  res.sendStatus(202);
});

router.post("/signup", (req, res, next) => {
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
  Product.findAll({
    where: {
      country: req.params.country
    },
    include: [
      {
        model: Comment,
        as: "commentsP",
        include: [
          {
            model: User
          }
        ]
      }
    ]
  })
    .then(products => res.json(products))
    .catch(function(err) {
      console.log(err, "no trae nadaaaa");
    });
});

router.get("/products", (req, res) => {
  Product.findAll({
    include: [
      {
        model: Comment,
        as: "commentsP",
        include: [
          {
            model: User
          }
        ]
      }
    ]
  }).then(products => {
    res.json(products);
  });
});

router.get("/product/:name", (req, res, next) => {
  const nameProduct = req.params.name;
  // console.log(req.params.name);

  Product.findOne({
    where: {
      // name: req.params.name
      name: {
        [Op.iLike]: `%${nameProduct}%`
      }
    },
    include: [
      {
        model: Comment,
        as: "commentsP",
        include: [
          {
            model: User
          }
        ]
      }
    ]
  }).then(singleProduct => {
    // console.log(singleProduct);
    res.send(singleProduct);
  });
});

router.get("/auth/me", (req, res) => {
  res.send(req.user);
});

module.exports = router;
