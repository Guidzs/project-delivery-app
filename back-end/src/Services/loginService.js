const { User } = require('../database/models');
const generateToken = require('../utils/auth/createToken');

const authentication = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: { exclude: 'password' },
     where: { email, password } });
     const { id, role } = user;
 const token = generateToken({ id, role });
 if (!token) {
  throw new Error(404, 'Not Found');
}
  return token;
};

module.exports = authentication;
