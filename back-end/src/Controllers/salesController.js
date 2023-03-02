const { newSales } = require('../Services/salesService');

const create = async(req, res) => {
  const sales = await newSales();
  return res.status(201).json(sales);
}

module.exports =  { create };
