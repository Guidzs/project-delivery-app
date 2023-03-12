const {
  sales,
  users,
  SalesProducts,
  products: Products,
} = require('../database/models');

const newSales = async (body) => {
    const { products, customer, deliveryAddress, deliveryNumber, totalPrice } = body;
    const { dataValues: { id: userId },
    } = await users.findOne({ where: { name: customer } });
    const { dataValues: { id: saleId } } = await sales.create({
      userId,
      sellerId: 2,
      deliveryAddress,
      deliveryNumber,
      totalPrice,
    });
    await products.map(async ({ name, quantity }) => {
      const { dataValues: { id: productId },
      } = await Products.findOne({ where: { name } });
      await SalesProducts.create({ productId, saleId, quantity });
    });
    return saleId;
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

const getProductsSellerId = async () => {
  const sale = await sales.findAll();
  const response = await sale.filter(({ sellerId }) => sellerId === 2);
  return response;
};
const updateState = async (saleId) => {
  const sale = await sales.findByPk(saleId, {
    include: { model: Products, as: 'productsList' },
  });
  const { dataValues } = sale;
  if (dataValues.status === 'Pendente') {
    await sales.update(
      { status: 'Preparando' },
      { where: { id: sale.id } },
    );
    return;
  }
  if (dataValues.status === 'Preparando') {
    await sales.update(
      { status: 'Em Trânsito' },
      { where: { id: sale.id } },
    );
  }
};

const updateStateCustomer = async (saleId) => {
  const sale = await sales.findByPk(saleId, {
    include: { model: Products, as: 'productsList' },
  });
  await sales.update(
    { status: 'Entregue' },
    { where: { id: sale.id } },
  );
  };

module.exports = {
  newSales,
  currentSale,
  getProductsSellerId,
  getAllSalesService,
  updateState,
  updateStateCustomer,
};
