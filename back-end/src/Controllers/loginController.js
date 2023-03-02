const authentication = require('../Services/loginService');

const login = async (req, res) => {
  try {
  const { email, password } = req.body;
  const response = await authentication({ email, password });

  const { token, name, role } = response;

  return res.status(200).json({ token, email, name, role });
  } catch (error) {
  res.status(404).json({ message: 'Not Found' });
  }
};

module.exports = login;
