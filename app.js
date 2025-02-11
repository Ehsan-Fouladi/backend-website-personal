require("dotenv").config();
require("./src/server");
const express = require("express");
const app = express();
const port = process.env.PORT ?? 4000;
const fs = require("fs");
const path = require("path");
const uploadDir = path.join(__dirname, "uploads");
const articleRouter = require("./src/routers/articleRouter");
const tagRouter = require("./src/routers/tagRouter");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("📂 Upload File Created");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", articleRouter);
app.use("/api", tagRouter);

app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
