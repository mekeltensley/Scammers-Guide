'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company_Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Company_Profile.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    industry: DataTypes.STRING,
    leadership: DataTypes.STRING,
    ticker_symbol: DataTypes.STRING,
    country: DataTypes.STRING,
    currency: DataTypes.STRING,
    exchange: DataTypes.STRING,
    ipo_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Company_Profile',
  });
  return Company_Profile;
};