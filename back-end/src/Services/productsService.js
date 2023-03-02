const { products } = require('../database/models');

const productsService = async () => {
  const response = await products.findAll();

  const dataValues = response.map((data) => data.dataValues);

  return dataValues;
};

module.exports = productsService;
