const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const appliances_multiselect = sequelize.define(
  "appliances_multiselect",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    survey_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "carbon_surveys", // Corrected
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    appliances_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "appliances",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "appliances_multiselect",
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = appliances_multiselect;
