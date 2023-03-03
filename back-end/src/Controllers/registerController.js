const createNewUser = require('../Services/registerService');
const createToken = require('../utils/auth/createToken');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  await createNewUser({ name, email, password, role });
  const token = createToken({ name, email, role });
  return res.status(201).json({ token, role, name, email });
};

module.exports = register;
