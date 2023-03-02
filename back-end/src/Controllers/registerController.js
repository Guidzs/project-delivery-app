const createNewUser = require('../Services/registerService');
const createToken = require('../utils/auth/createToken');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(name, email, password, role);
    await createNewUser({ name, email, password, role });
    console.log('pessoa cadastrada');
    const token = createToken({ name, email, role });
    console.log('token', token);
    res.status(201).json({ token, role, name, email });
  } catch (error) {
    res.status(409).json({ error });
  }
};

module.exports = register;
