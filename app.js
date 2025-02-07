const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const articleRouter = require("./src/routers/articleRouter");
require("./src/server");
require("dotenv").config();
const swaggerDocs = require("./src/swagger");

swaggerDocs(app);

app.use(express.json());
app.use("/", articleRouter); 

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
