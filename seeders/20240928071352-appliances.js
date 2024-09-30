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
          color:"#EEF6FF",
          boder_color:"#1D78EC",
        },
        {
          name: "AC",
          emission_value: 0.5,
          title:"",
          color:"#FFF4E6",
          boder_color:"#FFE0A1",
        },
        {
          name: "Chimney",
          emission_value: 0.05,
          title:"",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
        },
        {
          name: "Washing Machine",
          emission_value: 0.07,
          title:"",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
        },
        {
          name: "Electric Vehicles",
          emission_value: 0.12,
          title:"",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
        },
        {
          name: "Air Cooler",
          emission_value: 0.02,
          title:"",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
        },
        {
          name: "Mixer/Grinder",
          emission_value: 0.01,
          title:"",
          color:"#FFF4F3",
          boder_color:"#EB7E74",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("appliances", null, {});
  },
};
