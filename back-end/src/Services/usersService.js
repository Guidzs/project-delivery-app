const { users } = require('../database/models/index');

const serviceSellerName = async () => {
  const result = await users.findAll({ where: { role: 'seller' } });
  const sellers = result.map((user) => user.dataValues.name);
  return sellers;
};

module.exports = {
  serviceSellerName,
};
