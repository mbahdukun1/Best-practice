'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   let dataProducts = require("../data/data.json").Products
   dataProducts.forEach((el) => {
    el.createdAt = el.updatedAt = new Date()
   })
   await queryInterface.bulkInsert("Products", dataProducts)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {})
  }
};
