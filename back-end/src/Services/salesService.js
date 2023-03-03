const { sales, users, sales_products: SalesProducts,
   products: Products } = require('../database/models');

const newSales = async (body) => {

  const { seller, products, customer, deliveryAddress, deliveryNumber, totalPrice } = body;
  // Pegar os ids do seller e customer que são entregues pelo app com o nome do usuário
  const { dataValues: { id: sellerId } } = await users.findOne({ where: { name: seller } });
  const { dataValues: { id: userId } } = await users.findOne({ where: { name: customer } });
  console.log('amigo estou aqui 2')
  // Inserir dados na tabela sales
  const { dataValues: { id: saleId } } = await sales
    .create({
      userId,
      sellerId,
      deliveryAddress,
      deliveryNumber,
      totalPrice,
    });
  // Inserir valores dentro da tabela SalesProducts. Pegamos os produtos e dispachamos 1 por 1.
  await products.map(async ({ name, quantity }) => {
    // pegando o id de cada produto a partir do nome do produto
    const { dataValues: { id: productId } } = await Products.findOne({ where: { name } });
    // Inserindo dados na SalesProducts
    await SalesProducts.create({ productId, saleId, quantity });
  });
  return saleId;
};

module.exports = { newSales };
