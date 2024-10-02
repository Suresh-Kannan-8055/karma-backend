// models/vehicle_emmision.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const vehicleemmision = sequelize.define(
  "vehicle_emmision",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicle_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "vehicle_types",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    vehicle_fuel_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "vehicle_fuel_types",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    emission_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "vehicle_emmision",
    tableName: "vehicle_emmision", // Prevents pluralization
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = vehicleemmision;
