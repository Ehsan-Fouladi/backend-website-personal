const { database, sequelize } = require("./config/db");
const Article = require("./models/Article");

const startServer = async () => {
  try {
    await database();
    await sequelize.authenticate();
    console.log("✅ Connected to database.");

    await sequelize.sync({ force: true });
    console.log("✅ Tables have been created successfully.");
  } catch (error) {
    console.error("❌ Error during setup:", error);
  }
};

startServer();
