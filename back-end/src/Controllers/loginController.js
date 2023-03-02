const authentication = require('../Services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await authentication({ email, password });
  const { token, name, role } = response;
  return res.status(200).json({ token, email, name, role });
};

module.exports = login;
