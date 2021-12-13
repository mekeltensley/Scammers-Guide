'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Company_Health_Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      symbol: {
        type: Sequelize.STRING
      },
      price_earning_ratio: {
        type: Sequelize.INTEGER
      },
      debt_to_income: {
        type: Sequelize.INTEGER
      },
      net_profit_margin: {
        type: Sequelize.BIGINT
      },
      market_capitilization: {
        type: Sequelize.BIGINT
      },
      share_outstanding: {
        type: Sequelize.BIGINT
      },
      current_ratio: {
        type: Sequelize.INTEGER
      },
      sales_per_share: {
        type: Sequelize.INTEGER
      },
      beta: {
        type: Sequelize.INTEGER
      },
      h_day_average_trading_volume: {
        type: Sequelize.BIGINT
      },
      ft_week_low: {
        type: Sequelize.BIGINT
      },
      ft_week_low_date: {
        type: Sequelize.DATE
      },
      ft_week_high: {
        type: Sequelize.BIGINT
      },
      ft_week_high_date: {
        type: Sequelize.DATE
      },
      dividend: {
        type: Sequelize.INTEGER
      },
      dividend_yield: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Company_Health_Profiles');
  }
};