const { newSales, currentSale, getProductsSellerId } = require('../Services/salesService');
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

const getProductsBySeller = async (req, res) => {
  const { seller } = req.body;
  const products = await getProductsSellerId(seller);
  return res.status(201).json({ products });
};

module.exports = { create, getById, getProductsBySeller };
