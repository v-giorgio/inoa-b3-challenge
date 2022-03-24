const { Model, DataTypes } = require("sequelize");

class Assets extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        query_date: DataTypes.DATEONLY,
      },
      {
        sequelize,
        modelName: "Assets",
      }
    );
  }
}

module.exports = Assets;
