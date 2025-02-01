const { DataTypes } = require("sequelize");
const { sequelizeRaw } = require("../config/db");
const slugify = require("slugify");

const Article = sequelizeRaw.define(
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    public: {
      type: DataTypes.ENUM("public", "private", "draft"),
      allowNull: false,
      defaultValue: true,
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
