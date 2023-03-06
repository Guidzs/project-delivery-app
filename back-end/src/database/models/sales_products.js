module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('sales_products',
    {
      quantity: { type: DataTypes.INTEGER },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales_products'
    }
  );

  SalesProducts.associate = ({ sales, products }) => {
    products.belongsToMany(sales, {
      as: 'sale',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    sales.belongsToMany(products, {
      as: 'product',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return SalesProducts;
};
