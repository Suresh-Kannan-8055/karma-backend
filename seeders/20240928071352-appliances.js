"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "appliances",
      [
        {
          name: "Fridge",
          emission_value: 0.55,
        },
        {
          name: "AC",
          emission_value: 0.5,
        },
        {
          name: "Chimney",
          emission_value: 0.05,
        },
        {
          name: "Washing Machine",
          emission_value: 0.07,
        },
        {
          name: "Electric Vehicles",
          emission_value: 0.12,
        },
        {
          name: "Air Cooler",
          emission_value: 0.02,
        },
        {
          name: "Mixer/Grinder",
          emission_value: 0.01,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("appliances", null, {});
  },
};
