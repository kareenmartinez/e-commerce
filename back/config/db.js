const Sequelize = require("sequelize");

<<<<<<< HEAD
const sequelize = new Sequelize("postgres://localhost:5432/e-commerce", {
=======
const sequelize = new Sequelize("postgres://erikaastef99@localhost:5432/e-commerce", {
>>>>>>> aa36e3e846cfc987cfe6cb4e281960eb89351f93
  logging: false //para que no tire querys raras(false)
});
// erikaastef99@
module.exports = sequelize;
