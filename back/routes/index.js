const express = require("express");
const router = express();
const { Product, Comment, User, Order, OrderItem } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const passport = require("passport");

router.post("/logIn", passport.authenticate("local"), function (req, res) {
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

router.get("/category/:country", function (req, res) {
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
    .catch(function (err) {
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

router.get("/order/:userId", function (req, res) {
  console.log("-------", req.params.userId, "------- hola");
  Order.findAll({
    where: {
      userId: req.params.userId,
      state: "PENDING"
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
    ],
    order: [[{
      model: OrderItem,
      as: "item"
    }, 'id', 'DESC']]
  })
    .then(order => res.json(order))
    .catch(function (err) {
      console.log(err, "no trae nadaaaa");
    });
});

router.post("/addItem", (req, res) => {
  console.log(req.body, "este es el body");
  Order.findOne({
    //aca busca la order
    where: {
      userId: req.body.userId,
      state: "PENDING"
    }
  }).then(respuesta => {
    console.log("entro", "order findOne");
    if (!respuesta) {
      //si no lo consigue
      Order.create({
        //lo crea
        userId: req.body.userId,
        state: "PENDING"
      }).then(respuesta => {
        console.log("orderCreate");
        //crea los items de la order
        OrderItem.create({
          orderId: respuesta.id,
          productId: req.body.itemId
        }).then(respuesta => {
          console.log("orderItemCreate");
          res.send(respuesta);
        });
      });
    } else {
      //si consigue el order
      //busca el item

      OrderItem.findOne({
        where: {
          orderId: respuesta.id,
          productId: req.body.itemId
        }
      }).then(respuesta2 => {
        console.log("else find one");
        console.log(2, respuesta2);
        if (!respuesta2) {
          //si no existe el item lo crea
          OrderItem.create({
            orderId: respuesta.id,
            productId: req.body.itemId
          }).then(item => {
            console.log("OrderItemCreate");
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
              console.log("lo updatea");

              res.json(respuesta);
            });
        }
      });
    }
  });
});

//-------------------------------------------------

router.post("/sumar", (req, res) => {
  console.log("------------------------------------");
  console.log("entro a /suma");
  console.log(req.body.itemId, req.body.userId)

  console.log("------------------------------------");
  OrderItem.findOne({
    where: {
      id: req.body.itemId
    }
  }).then(item => {
    console.log(item.quantity, "quionda");
    let sumar = item.quantity + 1;

    item
      .update({
        quantity: sumar
      })
      .then(() => {
        Order.findAll({
          where: {
            userId: req.body.userId,
            state: "PENDING"
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
          ],
          order: [[{
            model: OrderItem,
            as: "item"
          }, 'id', 'DESC']]
        })
          .then(order => {
            console.log(item.quantity, "quionda2"), res.json(order)
          }
          )
          .catch(function (err) {
            console.log(err, "no trae nadaaaa en suma ");
          });

      });
  });
});

//--------------------------------------------------

router.post("/restar", (req, res) => {

  console.log("------------------------------------");
  console.log("entro a /resta");
  console.log(req.body.itemId, req.body.userId)

  console.log("------------------------------------");
  OrderItem.findOne({
    where: {
      id: req.body.itemId
    }
  }).then(item => {
    if (item.quantity > 1) {
      let restar = item.quantity - 1;
      return item
        .update({
          quantity: restar
        })
    } else {
      return item.destroy()
    }
  }).then(() => {
    Order.findAll({
      where: {
        userId: req.body.userId,
        state: "PENDING"
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
      ],
      order: [[{
        model: OrderItem,
        as: "item"
      }, 'id', 'DESC']]
    })
      .then(order => res.json(order))
      .catch(function (err) {
        console.log(err, "no trae nadaaaa en resta ");
      });

  });;
});

module.exports = router;
