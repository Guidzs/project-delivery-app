module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',
    {
      quantity: { type: DataTypes.INTEGER },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales_products',
    }
  );

  SalesProducts.associate = ({ sales, products }) => {
    products.belongsToMany(sales, {
      as: 'sale',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    sales.belongsToMany(products, {
      as: 'productsList',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SalesProducts;
};
