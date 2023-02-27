'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.sales.belongsTo(models.users, {
        foreignKey: 'user_id',
        as: 'user',
      });
    
      models.sales.belongsTo(models.users, {
        foreignKey: 'seller_id',
        as: 'seller',
      });
    }
  }
  sales.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(4, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sales',
    timestamps: false,
    underscored: true,
  });
  return sales;
};