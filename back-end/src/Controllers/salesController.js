const { newSales, currentSale } = require('../Services/salesService');
const veryfyToken = require('../utils/auth/verifyToken');

const create = async (req, res) => {
  const { authorization } = req.headers;

  try {
    veryfyToken(authorization);
  } catch (error) {
    return res.status(409).json();
  }
  const saleId = await newSales(req.body);
  return res.status(201).json({ 
    message: saleId,
   });
};

const getById = async (req, res) => {
  const { authorization } = req.headers;
  const { saleId } = req.params;
  try {
    veryfyToken(authorization);
  } catch (error) {
    return res.status(409).json(error);
  }
  const sale = await currentSale(saleId);
  return res.status(201).json({ message: sale });
};

module.exports = { create, getById };
