'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('food_types', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      food_type: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('food_types');
  }
};