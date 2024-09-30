'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('food_types', 'titel', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('food_types', 'color', {
      type: DataTypes.STRING(255),
      allowNull: true,
    });

    await queryInterface.addColumn('food_types', 'boder_color', {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("food_types", "titel");
    await queryInterface.removeColumn("food_types", "color");
    await queryInterface.removeColumn("food_types", "boder_color");
  },
};
