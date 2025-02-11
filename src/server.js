const { database, sequelize } = require("./config/db");
const Article = require("./models/Article");
const FormService = require("./models/FormService")
const Tag = require("./models/Tag");

const startServer = async () => {
  try {
    await database();
    await sequelize.authenticate();
    console.log("✅ Connected to database.");

    await sequelize.sync({ alter: true });
    console.log("✅ Tables have been created successfully.");
  } catch (error) {
    console.error("❌ Error during setup:", error);
  }
};

startServer();
