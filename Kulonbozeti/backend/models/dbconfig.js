const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chinook", null, null, {
  dialect: "sqlite",
  storage: "../chinook.db"
});

module.exports = sequelize;
