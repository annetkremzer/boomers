'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const devnames = ['Анюта', 'Илья', 'Ваня Я.' , ' Ваня С.', 'Тёма Молочник'];
    const kills = [15, 14, 69, 14, 88]
    
    const data = devnames.map((el, i) => {
      return {
        name: el,
        kills: kills[i],
        scores: kills[i] * 100,
        date: new Date,
        createdAt: new Date,
        updatedAt: new Date
      }
    })
    await queryInterface.bulkInsert('Playernames', data);
  },

  async down (queryInterface) {
  await queryInterface.bulkDelete('Playernames');
     
  }
};
