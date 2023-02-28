const createNewUser = require('../Services/registerService');

const register = async (req, res) => {
  const { name, email, password } = req.body;
   await createNewUser({ name, email, password })
  return res.status(201).json({ message: 'Created' });
};

module.exports = register;
