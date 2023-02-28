const { User } = require('../database/models');
const generateToken = require('../utils/auth/createToken');
const HttpException = require('../utils/HttpError');

const authentication = async ({ email, password }) => {
try {
  const user = await User.findOne({
    attributes: { exclude: 'password' },
     where: { email, password } });
     const { id, role } = user;
 const token = generateToken({ id, role });
 return token;
} catch (error) {
  throw new HttpException(404, 'Not Found');
};
};

module.exports = authentication;
