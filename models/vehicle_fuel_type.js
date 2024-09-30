const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const vehicle_fuel_type = sequelize.define(
  "vehicle_fuel_types",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fuel_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    emission_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    img_url:{
      type:DataTypes.TEXT,
      allowNull:true,
    }
  },
  {
    sequelize,
    modelName: "vehicle_fuel_types",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = vehicle_fuel_type;
