const { newSales, currentSale,
  getAllSalesService, getProductsSellerId, updateState,
  updateStateCustomer } = require('../Services/salesService');
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

const getAllSalesController = async (req, res) => {
  const { authorization } = req.headers;
  try {
    console.log(authorization);
    veryfyToken(authorization);
  } catch (error) {
    return res.status(409).json(error);
  }
  const allSales = await getAllSalesService();
  return res.status(201).json(allSales);
};

 const getProductsBySeller = async (req, res) => {
  const { seller } = req.body;
  const products = await getProductsSellerId(seller);
  return res.status(200).json({ products });
};

const update = async (req, res) => {
const { saleId } = req.params;
 const allSales = await updateState(saleId);
return res.status(201).json(allSales);
};

const updateCustomer = async (req, res) => {
  const { saleId } = req.params;
   const allSales = await updateStateCustomer(saleId);
  return res.status(201).json(allSales);
  };

module.exports = {
  create,
  getById,
  getAllSalesController,
  getProductsBySeller,
  update,
  updateCustomer };
