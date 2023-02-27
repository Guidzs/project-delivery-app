'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sales_products.init({
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantaty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sales_products',
  });
  return sales_products;
};