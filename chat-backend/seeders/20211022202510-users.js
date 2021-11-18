'use strict';


const bcrypt = require('bcrypt')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
       {
         firstName: 'John',
         lastName: 'Doe',
         email:'jdoe@gmail.com',
         password: bcrypt.hashSync('looks', 10),
         gender: 'male'
       },
       {
        firstName: 'peter',
        lastName: 'Doe',
        email:'pdoe@gmail.com',
        password:'looks',
        gender: 'male'
      },
      {
        firstName: 'mia',
        lastName: 'Doe',
        email:'mdoe@gmail.com',
        password:'looks',
        gender: 'female'
      },
    
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
