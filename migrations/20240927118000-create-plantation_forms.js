"use strict";

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("plantation_forms", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      survey_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:true,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Optional
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Optional
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("plantation_forms");
  },
};
