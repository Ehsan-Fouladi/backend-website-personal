const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const upload = require("../middlewares/uploadMiddleware")


router.get("/article", articleController.getAllArticles);
router.get("/article/:id", articleController.getArticleById);
router.post("/article/add", upload.fields([{name: "image"}, {name: "video"}]), articleController.createArticle);
router.put("/article/:id", articleController.updateArticle);
router.delete("/article/:id", articleController.deleteArticle);

module.exports = router;
