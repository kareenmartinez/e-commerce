const express = require("express");
const router = express();
const { Product, Comment, User, Order, OrderItem } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const nodemailer = require("nodemailer");

const passport = require("passport");

router.get("/history/:userId", (req, res) => {
  Order.findAll({
    where: {
      userId: req.params.userId,
      state: "FULFILLED"
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
  }).then(orders => {
    res.send(orders);
    console.log("-----------------------");
    console.log(orders);
    console.log("-----------------------");
  });
});

//Confirmation Email route -nodemailer-
router.post("/send", (req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "cosmeckpo@gmail.com",
      pass: "1561714812puto."
    }
  });

  // setup email data with unicode symbols
  var mailOptions = {
    from: "cosmeckpo@gmail.com",
    to: req.body.email,
    subject: "Your order is on the way :)",
    text: `Dear ${req.body.name} ${req.body.lastName}, your order has shipped! 
    and it's on the way to ${req.body.address}!

    In a city filled with so many choices, we thank you for choosing us. :)
            
    -Super Restaurante
    `
  };

  // send mail with defined transport object

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("Hubo un problema, este es el ERROR", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  Order.findOne({
    where: {
      userId: req.body.id,
      state: "PENDING"
    }
  }).then(order => {
    order
      .update({
        state: "FULFILLED"
      })
      .then(() => {
        res.send("TODO OK");
        setTimeout(() => {
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "cosmeckpo@gmail.com",
              pass: "1561714812puto."
            }
          });

          // setup email data with unicode symbols
          var mailOptions = {
            from: "cosmeckpo@gmail.com",
            to: req.body.email,
            subject: "Your order has been delivered. Enjoy your meal! :D ",
            text: `Hi ${req.body.name} ${req.body.lastName}, your order has been delivered! 
            Please don't forget to rate your overall satisfaction with the service received.

            In a city filled with so many choices, we thank you for choosing us. :)
            
            -Super Restaurante`
          };
          // send mail with defined transport object

          transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
              console.log("Hubo un problema, este es el ERROR", error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        }, 60000);
      });
  });
});

router.post("/logIn", passport.authenticate("local"), function(req, res) {
  console.log(req.user);
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
  console.log(req.user);
  res.send(req.user);
});

router.get("/order/:userId", function(req, res) {
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
    order: [
      [
        {
          model: OrderItem,
          as: "item"
        },
        "id",
        "DESC"
      ]
    ]
  })
    .then(order => res.json(order))
    .catch(function(err) {
      console.log(err, "no trae nadaaaa");
    });
});

router.post("/addItem", (req, res) => {
  Order.findOne({
    //aca busca la order
    where: {
      userId: req.body.userId,
      state: "PENDING"
    }
  }).then(respuesta => {
    if (!respuesta) {
      //si no lo consigue
      Order.create({
        //lo crea
        userId: req.body.userId,
        state: "PENDING"
      }).then(respuesta => {
        //crea los items de la order
        OrderItem.create({
          orderId: respuesta.id,
          productId: req.body.itemId
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
          productId: req.body.itemId
        }
      }).then(respuesta2 => {
        if (!respuesta2) {
          //si no existe el item lo crea
          OrderItem.create({
            orderId: respuesta.id,
            productId: req.body.itemId
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

router.post("/sumar", (req, res) => {
  OrderItem.findOne({
    where: {
      id: req.body.itemId
    }
  }).then(item => {
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
          order: [
            [
              {
                model: OrderItem,
                as: "item"
              },
              "id",
              "DESC"
            ]
          ]
        })
          .then(order => {
            res.json(order);
          })
          .catch(function(err) {
            console.log(err, "no trae nadaaaa en suma ");
          });
      });
  });
});

//--------------------------------------------------

router.post("/restar", (req, res) => {
  OrderItem.findOne({
    where: {
      id: req.body.itemId
    }
  })
    .then(item => {
      if (item.quantity > 1) {
        let restar = item.quantity - 1;
        return item.update({
          quantity: restar
        });
      } else {
        return item.destroy();
      }
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
        order: [
          [
            {
              model: OrderItem,
              as: "item"
            },
            "id",
            "DESC"
          ]
        ]
      })
        .then(order => res.json(order))
        .catch(function(err) {
          console.log(err, "no trae nadaaaa en resta ");
        });
    });
});

router.get("/remove/:id/:userId", (req, res) => {
  OrderItem.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
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
        ]
      }).then(order => {
        res.json(order);
      });
    })
    .catch(err => {
      console.log(err, "error");
    });
});

module.exports = router;
