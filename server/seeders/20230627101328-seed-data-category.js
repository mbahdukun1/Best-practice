'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let dataCategory = require("../data/data.json").Categories
   dataCategory.forEach((el) => {
    el.createdAt = el.updatedAt = new Date()
   })
   await queryInterface.bulkInsert("Categories", dataCategory)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {})
  }
};
