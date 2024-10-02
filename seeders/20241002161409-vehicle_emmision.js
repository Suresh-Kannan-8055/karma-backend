"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "vehicle_emmision",
      [
        {
          vehicle_type_id: 1,
          vehicle_fuel_type_id: 1,
          emission_value: 0,
        },
        {
          vehicle_type_id: 1,
          vehicle_fuel_type_id: 2,
          emission_value: 0,
        },
        {
          vehicle_type_id: 2,
          vehicle_fuel_type_id: 1,
          emission_value: 0.14,
        },
        {
          vehicle_type_id: 2,
          vehicle_fuel_type_id: 2,
          emission_value: 0.10,
        },
        {
          vehicle_type_id: 3,
          vehicle_fuel_type_id: 1,
          emission_value: 0.22,
        },
        {
          vehicle_type_id: 3,
          vehicle_fuel_type_id: 2,
          emission_value: 0.11,
        },
        
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("vehicle_emmision", null, {});
  },
};
