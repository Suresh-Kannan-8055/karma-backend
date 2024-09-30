const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const vehicle_type = sequelize.define(
  "vehicle_types",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicle_name: { // Corrected column name
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    emission_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    img_url:{
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "vehicle_types",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = vehicle_type;
