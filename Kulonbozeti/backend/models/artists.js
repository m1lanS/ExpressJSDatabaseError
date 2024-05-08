const { Model, DataTypes } = require("sequelize");
const sequelize = require("./dbconfig");

class Artists extends Model {}

Artists.init(
  {
    ArtistId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING
    }

  },
  {
    sequelize,
    modelName: "artists",
    timestamps: false
  }
);

module.exports = Artists;
