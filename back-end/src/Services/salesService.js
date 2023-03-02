const { sales, users, sales_products } = require('../database/models');

const association = async() => {
  const sale = await sales.create({ include: [
    { model: products, as: 'products' },
     { model:  sales_products, as: ' salesProducts' },
  ] });
  return sale;
};

const newSales = async (body) => {
const sale = await sales.findAll();
return sale;
}

module.exports = { newSales };
