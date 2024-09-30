'use strict';

const { DataTypes } = require('sequelize');
const carbon_survey=require("../models/carbon_survey")
const appliances=require("../models/appliances")


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:async(queryInterface, Sequelize)=>{
    await queryInterface.createTable('appliances_multiselects', {
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
    });
  },
  down:async(queryInterface, Sequelize)=> {
    await queryInterface.dropTable('appliances_multiselects');
  }
};