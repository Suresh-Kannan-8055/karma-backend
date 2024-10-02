"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vehicle_types",
      [
        {
          id:1,
          vehicle_name: "Bicycle/ Walk",
          titel:"🚲",
          color:"#EEF6FF",
          boder_color:"#1D78EC",
        },
        {
          id:2,
          vehicle_name: "Two Wheeler",
          titel:"🛵",
          color:"#FFF4E6",
          boder_color:"#FFBA63",
        },
        {
          id:3,
          vehicle_name: "Car",
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
