const authentication = require('../Services/loginService');

const login = async (req, res) => {
 try {
  const {email, password} = req.body;
  const token = await authentication({ email, password })
  return res.status(200).json({ token });
 } catch (error) {
  res.status(404).json({ message: "Not Found"})
 }

};

module.exports = login;
