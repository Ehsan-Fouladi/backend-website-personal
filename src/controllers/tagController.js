const Tag = require("../models/Tag");
const Article = require("../models/Article");

exports.createTag = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Tag name is Required." });
    }

    const tag = await Tag.create({ name });
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Error creating tag", error });
  }
};
