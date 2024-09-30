"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("carbon_surveys", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Optional: Default value
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Optional: Default value
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("carbon_surveys");
  },
};
