'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_products extends Model {
    static associate(models) {
      // sales products com products
      models.sales_products.belongsTo(models.products);
      models.products.belongsToMany(models.sales, { through: models.sales_products });
      // sales products com sales
      models.sales_products.belongsTo(models.sales);
      models.sales.belongsToMany(models.products, { through: models.sales_products });
    }
  }
  sales_products.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      references: 'sales',
      referencesKey: 'id',
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: 'products',
      referencesKey: 'id',
      allowNull: false
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  
  return sales_products;
};
