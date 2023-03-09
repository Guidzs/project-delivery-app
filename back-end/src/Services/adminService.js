const { users } = require('../database/models');
const md5 = require('md5');

const insertUserService = async ({ name, role, password, email }) => {
  try {
    const hash = md5(password);
    const verifyByEmail = await users.findOne({ where: { email } });
    const verifyByName = await users.findOne({ where: { name } });

    if (verifyByEmail || verifyByName) {
      console.log('Já existe essa pessoa cadastrada');
      throw new HttpException(409, 'Conflict');
    }
    if (role !== 'customer' && role !== 'seller') {
      console.log('Cadastre um usuário que seja vendedor ou cliente');
      throw new HttpException(409, 'Conflict');
    }

    const user = await users.create({ name, email, password: hash, role });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const removeUserService = async (id) => {
  try {
    console.log('Amigo Estou aqui 2');
    const response = await users.findOne({ where: { id } });
    const copyResponse = { ...response.dataValues };
    await response.destroy();
    return copyResponse;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsersListService = async () => {
  const response = await users.findAll({ where: { role: ['customer', 'seller'] } });
  return response;
};

module.exports = {
  insertUserService,
  removeUserService,
  getAllUsersListService,
};