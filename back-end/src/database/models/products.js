'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.products.belongsToMany(models.sales, { through: 'ActorMovies' });
      models.sales.belongsToMany(models.products, { through: 'ActorMovies' });
    }
  }
  products.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'products',
    timestamps: false,
    underscored: true,
  });
  return products;
};
