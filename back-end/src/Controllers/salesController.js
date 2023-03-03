const { newSales } = require('../Services/salesService');

const create = async (req, res) => {
  await newSales(req.body);
  return res.status(201).json({ message: 'Created' });
};

module.exports = { create };
