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
      models.sales_products.belongsTo(models.products);
      models.products.hasMany(models.sales, { through: models.sales_products });


      models.sales_products.belongsTo(models.sales);
      models.sales.hasMany(models.products, { through: models.sales_products });
    }
  }
  sales_products.init({
    id: DataTypes.INTEGER,
    sale_id: {
      type: DataTypes.INTEGER,
      references: 'sales',
      referencesKey: 'id',
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: 'products',
      referencesKey: 'id',
      allowNull: false
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sales_products',
  });

  
  return sales_products;
};