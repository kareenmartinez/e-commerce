const Comment = require("./Comment");
const Order = require("./Order");
const Product = require("./Product");
const User = require("./User");

Product.hasMany(Comment, { as: "commentsP" });
Comment.belongsTo(User);

//buscar relacion 
module.exports = { Comment, Order, Product, User };
