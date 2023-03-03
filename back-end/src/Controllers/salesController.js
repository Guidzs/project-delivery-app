const { newSales } = require('../Services/salesService');
const veryfyToken = require('../utils/auth/verifyToken');

const create = async (req, res) => {
  const { authorization } = req.headers;

  try {
    veryfyToken(authorization);
  } catch (error) {
    return res.status(404).json({ jwt: 'failed' });
  }

  try {
    const saleId = await newSales(req.body);
    res.status(201).json({ saleId });
  } catch (error) {
    res.status(409).json();
  }
};

module.exports = { create };
