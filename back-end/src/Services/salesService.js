const { sales, users, SalesProducts,
  products: Products } = require('../database/models');

const newSales = async (body) => {
  try {
    const { products, customer, deliveryAddress, deliveryNumber, totalPrice } = body;
    console.log(body);
    // Pegar os ids do seller e customer que são entregues pelo app com o nome do usuário
    // const { dataValues: { id: sellerId } } = await users.findOne({ where: { name: seller } });
    const { dataValues: { id: userId } } = await users.findOne({ where: { name: customer } });
    // Inserir dados na tabela sales
    const { dataValues: { id: saleId } } = await sales
    .create({
      userId,
      sellerId: 2,
      deliveryAddress,
      deliveryNumber,
      totalPrice,
    });

    // Inserir valores dentro da tabela SalesProducts. Pegamos os produtos e dispachamos 1 por 1.
    await products.map(async ({ name, quantity }) => {
      // pegando o id de cada produto a partir do nome do produto
      const { dataValues: { id: productId } } = await Products.findOne({ where: { name } });
      // Inserindo dados na SalesProducts
      const mapResponse = await SalesProducts.create({ productId, saleId, quantity });
      console.log(mapResponse.dataValues);
    });
    return saleId;
  } catch (error) {
    console.log(error);
  }
};

const currentSale = async (saleId) => {
  const sale = await sales.findByPk(saleId, {
    include: { model: Products, as: 'productsList' },
  });

  const sellerStore = await users.findByPk(sale.sellerId);
  const seller = { name: sellerStore.name };
  return { sale, seller };
};

const getAllSalesService = async () => {
  try {
    const data = await sales.findAll({
      include: [
        { model: Products, as: 'productsList' },
        { model: users, as: 'user', attributes: ['name'] },
        { model: users, as: 'seller', attributes: ['name'] },
      ],
    });

    const allSales = data.map((d) => d.dataValues);

    return { allSales };
  } catch (error) {
    console.log('Erro na getAllSalesService ---> ', error);
  }
};

module.exports = { newSales, currentSale,  };

const getProductsSellerId = async () => {
  const sale = await sales.findAll();
  const response = await sale.filter(({ sellerId }) => sellerId === 2);
  return response;
};

module.exports = { newSales, currentSale, getAllSalesService, getProductsSellerId };
