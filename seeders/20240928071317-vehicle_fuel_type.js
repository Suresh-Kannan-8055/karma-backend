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
          img_url:"/Petorl"
        },
        {
          fuel_type: "Electric Vehicle",
          emission_value: 0.112,
          img_url:"/Electric"
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vehicle_fuel_types", null, {});
  },
};
