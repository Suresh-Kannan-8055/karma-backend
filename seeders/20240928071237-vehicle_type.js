"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vehicle_types",
      [
        {
          vehicle_name: "Bicycle/ Walk",
          emission_value: 0,
          titel:"🚲",
          color:"#EEF6FF",
          boder_color:"#1D78EC",
        },
        {
          vehicle_name: "Two Wheeler",
          emission_value: 0.1,
          titel:"🛵",
          color:"#FFF4E6",
          boder_color:"#FFE0A1",
        },
        {
          vehicle_name: "Car",
          emission_value: 0.22,
          titel:"🚗",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vehicle_types", null, {});
  },
};
