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
          img_url:"/bicycle"
        },
        {
          vehicle_name: "Two Wheeler",
          emission_value: 0.1,
          img_url:"/bike"
        },
        {
          vehicle_name: "Car",
          emission_value: 0.220,
          img_url:"/carimg"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vehicle_types", null, {});
  },
};
