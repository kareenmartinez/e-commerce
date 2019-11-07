const Sequelize = require("sequelize");

<<<<<<< HEAD
const sequelize = new Sequelize("postgres://localhost:5432/ecommerce", {
  logging: false //para que no tire querys raras(false)
=======
const sequelize = new Sequelize("postgres://erikaastef99@localhost:5432/e-commerce", {
  logging: false//para que no tire querys raras(false)
>>>>>>> fe21a2841979f5f3e64d700aeff881000d7af725
});

module.exports = sequelize;
