'use strict';

const items = [
  {
    id: '1',
    name: 'Nadia'
  },
  {
    id: '2',
    name: 'Poi'
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: {[Sequelize.Op.in]: items.map((item) => item.id)}
      },
      {}
    );
  }
};
