const { sales, users, sales_products: SalesProducts,
   products: Products } = require('../database/models');

const newSales = async (body) => {
  const { seller, products, customer, deliveryAddress, deliveryNumber } = body;
  const { dataValues: { id: sellerId } } = await users.findOne({ where: { name: seller } });
  const { dataValues: { id: userId } } = await users.findOne({ where: { name: customer } });
  const sale = await sales.create({
    userId,
    sellerId,
    deliveryAddress,
    deliveryNumber,
 });
  await Promise.all(products.map(async ({ name, quantity }) => {
    const { dataValues: { id: productId } } = await Products.findOne({ where: { name } });
    await SalesProducts.create({ productId, saleId: sale.dataValues.id, quantity });
  }));
  return sale;
};

module.exports = { newSales };
