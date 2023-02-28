const createNewUser = require('../Services/registerService');
const createToken = require('../utils/auth/createToken');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const response = await createNewUser({ name, email, password });

  const { id: ID, role: ROLE, name: NAME } = response.dataValues;

  const token = createToken({ id: ID, role: ROLE, name: NAME });

  return res.status(201).json({ token });
};

module.exports = register;
