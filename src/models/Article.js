const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const slugify = require("slugify");

const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    discretion: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    video: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
    public: {
      type: DataTypes.ENUM("public", "private", "draft"),
      allowNull: false,
      defaultValue: "private",
    },
  },
  {
    timestamps: true,
  }
);

Article.beforeValidate((arctic) => {
  if (arctic.title) {
    arctic.slug = slugify(arctic.title, {
      lower: true,
      strict: true,
    });
  }
});

module.exports = Article;
