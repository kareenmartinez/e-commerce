const S = require("sequelize");
const db = require("../config/db");
const crypto = require("crypto");

// const Comment = require("./Comment");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    lastName: {
      type: S.STRING,
      allowNull: false
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    isAdmin: {
      type: S.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    direction: {
      type: S.STRING,
      allowNull: false
    },
    password: {
      type: S.STRING,
      allowNull: false
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
User.addHook("beforeCreate", user => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.validPassword = function(password) {
  return this.password === this.hashPassword(password);
};
// User.hasMany(Comment, { as: "user" });

module.exports = User;
