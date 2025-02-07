const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

/**
 * @swagger
 * tags:
 *   name: Articles
 */

/**
 * @swagger
 * /article:
 *   get:
 *     summary: دریافت لیست مقالات
 *     description: لیست همه مقالات را برمی‌گرداند.
 *     responses:
 *       200:
 *         description: موفقیت‌آمیز، لیست مقالات بازگردانده شد.
 */
router.get("/article", articleController.getAllArticles);

/**
 * @swagger
 * /article/{id}:
 *   get:
 *     summary: دریافت مقاله با ID خاص
 *     description: دریافت اطلاعات یک مقاله بر اساس شناسه (ID).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: شناسه مقاله
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: مقاله یافت شد.
 *       404:
 *         description: مقاله پیدا نشد.
 */
router.get("/article/:id", articleController.getArticleById);

/**
 * @swagger
 * /article/add:
 *   post:
 *     summary: افزودن مقاله جدید
 *     description: یک مقاله جدید به سیستم اضافه می‌کند.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "مقاله جدید"
 *               content:
 *                 type: string
 *                 example: "محتوای مقاله جدید"
 *     responses:
 *       201:
 *         description: مقاله با موفقیت ایجاد شد.
 *       400:
 *         description: درخواست نامعتبر.
 */
router.post("/article/add", articleController.createArticle);

/**
 * @swagger
 * /article/{id}:
 *   put:
 *     summary: بروزرسانی مقاله با ID خاص
 *     description: اطلاعات یک مقاله را بر اساس شناسه (ID) بروزرسانی می‌کند.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: شناسه مقاله برای بروزرسانی
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "عنوان جدید مقاله"
 *               content:
 *                 type: string
 *                 example: "محتوای بروزرسانی‌شده مقاله"
 *     responses:
 *       200:
 *         description: مقاله با موفقیت بروزرسانی شد.
 *       400:
 *         description: درخواست نامعتبر.
 *       404:
 *         description: مقاله پیدا نشد.
 */
router.put("/article/:id", articleController.updateArticle);

/**
 * @swagger
 * /article/{id}:
 *   delete:
 *     summary: حذف مقاله با ID خاص
 *     description: یک مقاله را بر اساس شناسه (ID) حذف می‌کند.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: شناسه مقاله برای حذف
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: مقاله حذف شد.
 *       404:
 *         description: مقاله پیدا نشد.
 */
router.delete("/article/:id", articleController.deleteArticle);

module.exports = router;
