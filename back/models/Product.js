const S = require("sequelize");
const db = require("../config/db");
const Comment = require("./Comment");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    price: {
      type: S.INTEGER,
      allowNull: false
    },
    img: {
      type: S.STRING,
      allowNull: false
    },
    country: {
      type: S.STRING,
      allowNull: false
    },
    description: {
      type: S.TEXT,
      allowNull: false
    },
    rating: {
      type: S.INTEGER
    },
    stock: {
      type: S.INTEGER
    }
  },
  {
    sequelize: db,
    modelName: "product"
  }
);


module.exports = Product;
