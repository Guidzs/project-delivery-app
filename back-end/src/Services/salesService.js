const { sales } = require('../database/models');

const newSales = async (body) => {
 const sale = await sales.create(...body);
return sale;
};

module.exports = { newSales };
