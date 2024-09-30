"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('vehicle_fuel_types', 'titel', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('vehicle_fuel_types', 'color', {
      type: DataTypes.STRING(255),
      allowNull: true,
    });

    await queryInterface.addColumn('vehicle_fuel_types', 'boder_color', {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("vehicle_fuel_types", "titel");
    await queryInterface.removeColumn("vehicle_fuel_types", "color");
    await queryInterface.removeColumn("vehicle_fuel_types", "boder_color");
  },
};
