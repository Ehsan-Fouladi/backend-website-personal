const { database } = require("./config/db");

const startServer = async () => {
  await database();
};

startServer();
