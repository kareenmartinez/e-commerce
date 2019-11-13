const express = require("express");
const router = express();
const { Product, Comment, User, Order, OrderItem } = require("../models");
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
  })
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      console.log(err, "es un suuuper error");
    });
});

router.get("/product/:name", (req, res, next) => {
  const nameProduct = req.params.name;
  Product.findOne({
    where: {
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
  })
    .then(singleProduct => {
      res.send(singleProduct);
    })
    .catch(err => {
      console.log(err, "es un suuuper error");
    });
});

router.get("/auth/me", (req, res) => {
  res.send(req.user);
});

router.get("/order", function(req, res) {
  Order.findAll({
    where: {
      userId: 1
    },
    include: [
      {
        model: OrderItem,
        as: "item",
        include: [
          {
            model: Product
          }
        ]
      }
    ]
  })
    .then(order => res.json(order))
    .catch(function(err) {
      console.log(err, "no trae nadaaaa");
    });
});

module.exports = router;
