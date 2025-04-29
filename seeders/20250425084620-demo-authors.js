'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Jane Doe',
      },
      {
        name: 'John Smith',
      }
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
