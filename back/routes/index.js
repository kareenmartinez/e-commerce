const express = require("express");
const router = express();
const { Product, Comment, User, Order, OrderItem } = require("../models");
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
      userId: 5
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

router.get("/addItem", (req, res) => {
  Order.findOne({
    //aca busca la order
    where: {
      userId: 5,
      state: "pending"
    }
  }).then(respuesta => {
    console.log(1, respuesta);
    if (!respuesta) {
      //si no lo consigue
      Order.create({
        //lo crea
        userId: 5,
        state: "pending"
      }).then(respuesta => {
        //crea los items de la order
        OrderItem.create({
          orderId: respuesta.id,
          productId: 1
        }).then(respuesta => {
          res.send(respuesta);
        });
      });
    } else {
      //si consigue el order
      //busca el item

      OrderItem.findOne({
        where: {
          orderId: respuesta.id,
          productId: 3
        }
      }).then(respuesta2 => {
        console.log(2, respuesta2);
        if (!respuesta2) {
          //si no existe el item lo crea
          OrderItem.create({
            orderId: respuesta.id,
            productId: 3
          }).then(item => {
            res.json(item);
          });
        } else {
          //lo updatea (+,-)
          let nuevaCantidad = respuesta2.quantity + 1;
          respuesta2
            .update({
              quantity: nuevaCantidad
            })
            .then(respuesta => {
              res.json(respuesta);
            });
        }
      });
    }
  });
});

//-------------------------------------------------

router.get("/sumar", (req, res) => {
  console.log("------------------------------------");
  console.log("entro");
  OrderItem.findOne({
    where: {
      id: 1
    }
  }).then(item => {
    console.log(item);
    let sumar = item.quantity + 1;
    item
      .update({
        quantity: sumar
      })
      .then(respuesta => {
        res.json(respuesta);
      });
  });
});

router.get("/restar", (req, res) => {
  OrderItem.findOne({
    where: {
      id: 1
    }
  }).then(item => {
    if (item.quantity > 1) {
      let restar = item.quantity - 1;
      item
        .update({
          quantity: restar
        })
        .then(respuesta => {
          res.json(respuesta);
        });
    } else {
      item.destroy().then(() => {
        res.send("se borro");
      });
    }
  });
});

module.exports = router;
