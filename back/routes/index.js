const express = require("express");
const router = express();
<<<<<<< HEAD
const Product = require("../models/Product");
const User = require("../models/User");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const passport = require("passport");

//Confirmation Email route
// router.post("/send", (req, res) => {
//   console.log("ESTE ES EL REQ.BODY DEL SEND");
//   const output = `
// <h1>Tu pedido ha sido confirmado y esta en camino</h1>
// <h2>Detalles del envio:</h2>
// <ul>
// <li>item:${req.body.name}</li>
// </ul>
// `;
// });

=======
const { Product, Comment, User } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const passport = require("passport");

>>>>>>> 167b55a75f4ba47e698890150bc5957320724b1c
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
