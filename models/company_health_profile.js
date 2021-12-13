'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company_Health_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  Company_Health_Profile.init({
    symbol: DataTypes.STRING,
    price_earning_ratio: DataTypes.INTEGER,
    debt_to_income: DataTypes.INTEGER,
    net_profit_margin: DataTypes.BIGINT,
    market_capitilization: DataTypes.BIGINT,
    share_outstanding: DataTypes.BIGINT,
    current_ratio: DataTypes.INTEGER,
    sales_per_share: DataTypes.INTEGER,
    beta: DataTypes.INTEGER,
    h_day_average_trading_volume: DataTypes.BIGINT,
    ft_week_low: DataTypes.BIGINT,
    ft_week_low_date: DataTypes.DATE,
    ft_week_high: DataTypes.BIGINT,
    ft_week_high_date: DataTypes.DATE,
    dividend: DataTypes.INTEGER,
    dividend_yield: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company_Health_Profile',
  });
  return Company_Health_Profile;
};