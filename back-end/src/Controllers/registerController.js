const createNewUser = require('../Services/registerService');
const createToken = require('../utils/auth/createToken');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const response = await createNewUser({ name, email, password });
    const { id: ID, role: ROLE, name: NAME } = response.dataValues;
    const token = createToken({ id: ID, role: ROLE, name: NAME });
  
    res.status(201).json({ token, role: ROLE, name: NAME, email });
  } catch (error) {
    res.status(409).json({ error });
  }
};

module.exports = register;
