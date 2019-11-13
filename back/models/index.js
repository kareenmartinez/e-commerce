const Comment = require("./Comment");
const Order = require("./Order");
const Product = require("./Product");
const User = require("./User");
const OrderItem = require("./OrderItem");

Product.hasMany(Comment, { as: "commentsP" });
Comment.belongsTo(User);
Order.hasMany(OrderItem, { as: "item" });
OrderItem.belongsTo(Product);


//buscar relacion 
module.exports = { Comment, Order, Product, User, OrderItem };
