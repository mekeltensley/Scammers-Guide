'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Company_Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      industry: {
        type: Sequelize.STRING
      },
      leadership: {
        type: Sequelize.STRING
      },
      ticker_symbol: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      currency: {
        type: Sequelize.STRING
      },
      exchange: {
        type: Sequelize.STRING
      },
      ipo_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Company_Profiles');
  }
};