const { sequelize } = require("../config/db");
const Tag = require("./Tag");
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
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
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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

Article.belongsToMany(Tag, { through: "ArticleTag" });
Tag.belongsToMany(Article, { through: "ArticleTag" });

module.exports = Article;
