const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const carbon_survey = sequelize.define(
  "carbon_surveys",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "vehicle_types", // Corrected
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    vehicles_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vehicle_fuel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "vehicle_fuel_types", // Corrected
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    distance_per_week: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "food_types", // Corrected
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    electricity_units: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    carbon_footprint: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "carbon_surveys",
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);

module.exports = carbon_survey;