const md5 = require('md5');
const { users } = require('../database/models');
const HttpException = require('../utils/HttpError');

const createNewUser = async ({ name, email, password, role }) => {
  const hash = md5(password);
  const verifyByEmail = await users.findOne({ where: { email } });
  const verifyByName = await users.findOne({ where: { name } });

  if (verifyByEmail || verifyByName) {
    console.log('Já existe essa pessoa cadastrada');
    throw new HttpException(409, 'Conflict');
  }
  const user = await users.create({ name, email, password: hash, role });
  console.log(user);
  return user;
};

module.exports = createNewUser;
