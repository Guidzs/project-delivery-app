'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('sales', [
      {
        user_id: 1,
        seller_id: 2,
        total_price: 26,
        delivery_address: 'Rua 01',
        delivery_number: 111,
        sale_date: new Date('2011-08-01T19:58:00.000Z'),
        status: 'Pendente',
      },
    ], { timestamp: true });
  },

  async down (queryInterface, _Sequelize) {
     await queryInterface.bulkDelete('sales', null, {});
  }
};
