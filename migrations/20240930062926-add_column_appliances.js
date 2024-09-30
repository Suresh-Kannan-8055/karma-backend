'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('appliances', 'title', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('appliances', 'color', {
      type: DataTypes.STRING(255),
      allowNull: true,
    });

    await queryInterface.addColumn('appliances', 'boder_color', {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("appliances", "title");
    await queryInterface.removeColumn("appliances", "color");
    await queryInterface.removeColumn("appliances", "boder_color");
  },
};
