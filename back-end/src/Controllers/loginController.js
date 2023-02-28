const service = require('../Services/loginService');

const login = async (_req, res) => {
const token = await service.authentication();
return res.status(200).json({ token });
};

module.exports = login;
