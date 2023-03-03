const { newSales } = require('../Services/salesService');

const create = async (req, res) => {
  const saleId = await newSales(req.body);
  return res.status(201).json({ saleId });
};

module.exports = { create };
