"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Suresh",
          last_name: "Kannan",
          email:"suresh@gmail.com",
          phone_number:"0123456789",
        },
        {
          first_name: "Sabareesh",
          last_name: "",
          email:"sabareesh@gmail.com",
          phone_number:"9876543210",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
