const S = require("sequelize");
const db = require("../config/db");

// const User = require("./User");
// const Product = require("./Product");

class Order extends S.Model {}

Order.init(
  {
    quantity: {
      type: S.INTEGER
    },
    total: {
      type: S.INTEGER
    },
    state: {
      type: S.STRING,
      defaultValue: "PENDING"
    }
  },
  {
    sequelize: db,
    modelName: "order"
  }
);

//mas adelante
// Order.belongsTo(User, { as: "order" });
// Order.hasMany(Product, { as: "order" });

module.exports = Order;
