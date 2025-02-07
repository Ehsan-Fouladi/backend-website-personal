const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const port = process.env.PORT || 4000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Personal Website API",
      version: "1.3.2",
      description: "API documentation for Personal Website",
    },
  },
  apis: ["./src/routers/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app) => {
  app.use("", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger Docs: http://localhost:${port}`);
};

module.exports = swaggerDocs;