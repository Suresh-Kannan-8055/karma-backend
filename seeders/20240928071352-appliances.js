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
          title:"",
          color:"#E4FFEE",
          border_color:"#65b24c",
        },
        {
          name: "AC",
          emission_value: 0.5,
          title:"",
          color:"#FFF4E6",
          border_color:"#FFBA63",
        },
        {
          name: "Chimney",
          emission_value: 0.05,
          title:"",
          color:"#FFF4F3",
          border_color:"#EB7E74",
        },
        {
          name: "Washing Machine",
          emission_value: 0.07,
          title:"",
          color:"#F9F5F7",
          border_color:"#EF9BC5",
        },
        {
          name: "Electric Vehicles",
          emission_value: 0.12,
          title:"",
          color:"#FCF5FF",
          border_color:"#d981ff",
        },
        {
          name: "Air Cooler",
          emission_value: 0.02,
          title:"",
          color:"#E4FBFF",
          border_color:"#66e8ff",
        },
        {
          name: "Mixer/Grinder",
          emission_value: 0.01,
          title:"",
          color:"#FFF4F3",
          border_color:"#EB7E74",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("appliances", null, {});
  },
};
