const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("./src/server");
require("dotenv").config();

// const router = express.Router()

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
