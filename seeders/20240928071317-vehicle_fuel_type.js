"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vehicle_fuel_types",
      [
        {
          fuel_type: "Petrol/Diesel",
          emission_value: 0.224,
          titel:"⛽",
          color:"#FFF4E6",
          boder_color:"#FFE0A1",
        },
        {
          fuel_type: "Electric Vehicle",
          emission_value: 0.112,
          titel:"🔌",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vehicle_fuel_types", null, {});
  },
};
