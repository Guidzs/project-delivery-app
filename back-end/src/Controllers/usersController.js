const { sellerService } = require('../Services/usersService');

const sellerController = async (_req, res) => {
  const sellers = await sellerService();
  return res.status(200).json({ sellers });
};

module.exports = {
  sellerController,
};
