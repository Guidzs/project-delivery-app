const { newSales } = require('../Services/salesService');
const veryfyToken = require('../utils/auth/verifyToken');

const create = async (req, res) => {
  const { authorization } = req.headers;

  try {
    veryfyToken(authorization);
  } catch (error) {
    res.status(409).json();
  }
  const saleId = await newSales(req.body);
  res.status(201).json({ saleId });
};

module.exports = { create };