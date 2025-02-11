require("dotenv").config();
const { Sequelize } = require("sequelize");

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
      `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`
    );
    console.log(`✅ Database '${process.env.DB_NAME}' checked/created`);
  } catch (error) {
    console.error("❌ Database creation failed:", error);
    process.exit(1);
  }
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = { database, sequelize };
