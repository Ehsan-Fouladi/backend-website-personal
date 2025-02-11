const Article = require("../models/Article");

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching articles", error });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching article", error });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const { title, slug, description, content, public } = req.body;

    if (!title || !slug || !description || !content) {
      res
        .status(400)
        .json({ message: "Title, slug, description, content Are Required" });
    }

    const image = req.files?.image
      ? `/uploads/${req.files.image[0].filename}`
      : null;
    const video = req.files?.video
      ? `/uploads/${req.files.video[0].filename}`
      : null;

    const newArticle = await Article.create({
      title,
      slug,
      description,
      content,
      image,
      video,
      public,
    });
    res
      .status(201)
      .json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating article", error });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const { title, slug, description, content, public } = req.body;

    const image = req.files?.image
      ? `/uploads/${req.files.image[0].filename}`
      : article.image;
    const video = req.files?.video
      ? `/uploads/${req.files.video[0].filename}`
      : article.video;

    await article.update({
      title,
      slug,
      description,
      content,
      image,
      video,
      public,
    });

    res.status(200).json({ message: "Article updated successfully", article });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating article", error });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    await article.destroy();
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting article", error });
  }
};
