const { sellerService } = require("../Services/usersService");

const sellerController = async (_req, res) => {
  const sellers  = await sellerService();
  res.status(200).json({ sellers });
}

module.exports = {
  sellerController,
}