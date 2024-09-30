'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:async(queryInterface, Sequelize) =>{ 
     
     await queryInterface.bulkInsert('food_types', [{
      food_type: "Veg",
      emission_value: 1.5,
      titel:"🥬",
      color:"#E4FFEE",
      boder_color:"#FFE0A1",
    },
    {
      food_type: "Non Veg",
      emission_value: 3.3,
      titel:"🍢",
      color:"#FFF4F3",
      boder_color:"#EB7E74",
    },
    {
      food_type: "Both",
      emission_value: 2.3,
      titel:"🍗",
      color:"#FFF4F3",
      boder_color:"#EB7E74",
    },], {});
    
  },

   down:async (queryInterface, Sequelize)=> {  
    await queryInterface.bulkDelete('food_types', null, {});
  }
};
