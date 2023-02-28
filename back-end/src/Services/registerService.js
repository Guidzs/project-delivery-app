const md5 = require('md5');
const { users } = require('../database/models');
const HttpException = require('../utils/HttpError');

const createNewUser = async ({ name, email, password }) => {
  const hash = md5(password);
  const verifyByEmail = await users.findOne({ where: { email } });
  const verifyByName = await users.findOne({ where: { name } });

  if (verifyByEmail || verifyByName) {
    throw new HttpException(409, 'Conflict');
  }
  const user = await users.create({ name, email, password: hash });
  return user;
};

module.exports = createNewUser;
