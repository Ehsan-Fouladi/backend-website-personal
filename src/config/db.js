const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelizeRaw = new Sequelize(
  "",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

const database = async () => {
  try {
    await sequelizeRaw.query(
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
    );
    console.log(`✅ Database '${process.env.DB_NAME}' checked/created`);

    global.sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false,
      }
    );

    await global.sequelize.authenticate();
    console.log("✅ Database connection established.");
  } catch (error) {
    console.error("❌ Database creation failed:", error);
    process.exit(1);
  }
};

module.exports = { database, sequelizeRaw };
