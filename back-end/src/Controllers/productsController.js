const productsService = require('../Services/productsService');

const productsController = async (_req, res) => {
  const response = await productsService();

  console.log(response);

  res.status(200).json(response);
};

module.exports = productsController;