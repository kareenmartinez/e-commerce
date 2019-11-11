const Sequelize = require("sequelize");

<<<<<<< HEAD
const sequelize = new Sequelize("postgres://localhost:5432/ecommerce", {
=======
const sequelize = new Sequelize("postgres://localhost:5432/e-commerce", {
>>>>>>> 93489add3e3e748a9c40e49f970647329ead6300
  logging: false //para que no tire querys raras(false)
});
// erikaastef99@
module.exports = sequelize;
