const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://localhost:5432/e-commerce", {
  logging: false //para que no tire querys raras(false)
});
// erikaastef99@
module.exports = sequelize;
