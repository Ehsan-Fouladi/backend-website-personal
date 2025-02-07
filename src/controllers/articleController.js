const Articles = require("../models/Article");

exports.getAllArticles = async (req, res) => {
  try {
    const article = await Articles.findAll();
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "article error", error });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await Articles.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "article error", error });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const { title, slug, discretion, image, video, public } = req.body;
    const newArticle = await Articles.create({
      title,
      slug,
      discretion,
      image,
      video,
      public,
    });
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ message: "article error", error });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const article = await Articles.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "article not found" });
    }
    await article.update();
    res.json(200).json({ message: "article updated" });
  } catch (error) {
    res.status(500).json({ message: "article error", error });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const article = await Articles.findByPk(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "article not found" });
    }
    await article.destroy();
    res.status(200).json({ message: "article deleted" });
  } catch (error) {
    res.status(500).json({ message: "article error", error });
  }
};
