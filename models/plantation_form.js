const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const plantation_form = sequelize.define(
  "plantation_forms",
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
        model: "carbon_surveys",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(20), // Changed from INTEGER to STRING
      allowNull: false,
    },
    e_mail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tree_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "plantation_forms",
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  }
);
module.exports = plantation_form;
