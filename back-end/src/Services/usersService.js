const { users } = require('../database/models/index');

const sellerService = async () => {
  const result = await users.findAll({ where: { role: 'seller' } });

  const sellers = result.map((user) => user.dataValues.name);
  console.log(sellers);
  return sellers;
};

module.exports = {
  sellerService,
};
