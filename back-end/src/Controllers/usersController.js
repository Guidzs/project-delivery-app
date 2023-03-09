const { serviceSellerName, serviceSeller } = require('../Services/usersService');

const sellerByName = async (_req, res) => {
  const sellers = await serviceSellerName();
  console.log(sellers);
  return res.status(200).json({ sellers });
};

const getSeller = async (_req, res) => {
  const sellers = await serviceSeller();
  console.log(sellers);
  return res.status(200).json({ sellers });
};

module.exports = {
  sellerByName,
  getSeller,
};
