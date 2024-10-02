"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vehicle_fuel_types",
      [
        {
          id:1,
          fuel_type: "Petrol/Diesel",
          titel:"⛽",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
          
        },
        {
          id:2,
          fuel_type: "Electric Vehicle",
          titel:"🔌",
          color:"#FFF4E6",
          boder_color:"#FFBA63",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vehicle_fuel_types", null, {});
  },
};
