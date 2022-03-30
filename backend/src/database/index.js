const Sequelize = require("sequelize");
const config = require("../config/config");

const Assets = require("../models/Assets");

const dbConnection = new Sequelize(config);

Assets.init(dbConnection);

module.exports = dbConnection;
