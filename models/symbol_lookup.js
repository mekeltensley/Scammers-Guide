'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symbol_Lookup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Symbol_Lookup.init({
    company_name: DataTypes.STRING,
    exchange: DataTypes.STRING,
    stock_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Symbol_Lookup',
  });
  return Symbol_Lookup;
};