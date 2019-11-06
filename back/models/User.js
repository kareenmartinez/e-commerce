const S = require("sequelize");
const db = require("../config/db");

// const Comment = require("./Comment");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    direction: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmpty: false
      }
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false
    },
    salt: {
      type: S.STRING
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);

// User.hasMany(Comment, { as: "user" });

module.exports = User;
