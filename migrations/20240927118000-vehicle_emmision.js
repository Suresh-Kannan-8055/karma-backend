'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("vehicle_emmision", {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("vehicle_emmision");
  },
};
