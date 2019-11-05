const S = require("sequelize");
const db = require("../config/db");

class Comment extends S.Model {}

Comment.init(
  {
    comment: {
      type: S.TEXT,
      allowNull: false
    },
    rating: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "comment"
  }
);

module.exports = Comment;
