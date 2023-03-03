const { serviceSellerName } = require('../Services/usersService');

const sellerByName = async (_req, res) => {
  const sellers = await serviceSellerName();
  return res.status(200).json({ sellers });
};

module.exports = {
  sellerByName,
};
