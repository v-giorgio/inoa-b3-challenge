require("dotenv").config();

module.exports = {
  dialect: process.env.DB_DIALECT || "mysql",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
};
