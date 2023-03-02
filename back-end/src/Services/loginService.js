const md5 = require('md5');
const { users } = require('../database/models');
const generateToken = require('../utils/auth/createToken');
const HttpException = require('../utils/HttpError');

const authentication = async ({ email, password }) => {
  const hash = md5(password);
  const user = await users.findOne({
    where: { email },
  });
  
  if (user === null) {
    throw new HttpException(404, 'Not Found');
  }

  const { id, role, password: pass, name } = user.dataValues;

  if (pass !== hash) {
    throw new HttpException(404, 'Not Found');
  }

  const token = generateToken({ id, role, name });
  return token;
};

module.exports = authentication;
