'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 5
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 2
      },
    ], { timestamp: true });
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('sales_products', null, {});
  }
};
