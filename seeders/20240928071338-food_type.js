'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up:async(queryInterface, Sequelize) =>{ 
     
     await queryInterface.bulkInsert('food_types', [{
      food_type: "Veg",
      emission_value: 1.5,
      img_url:"/veg"
    },
    {
      food_type: "Non Veg",
      emission_value: 3.3,
      img_url:"/nonveg"
    },
    {
      food_type: "Both",
      emission_value: 2.3,
      img_url:"/veg-nonveg"
    },], {});
    
  },

   down:async (queryInterface, Sequelize)=> {  
    await queryInterface.bulkDelete('food_types', null, {});
  }
};
