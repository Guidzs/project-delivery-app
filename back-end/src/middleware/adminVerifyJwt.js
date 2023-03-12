const verifyToken = require('../utils/auth/verifyToken');

const adminVerifyJwt = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const tokenResponse = verifyToken(authorization);
    if (tokenResponse.role !== 'administrator') throw new Error('You are not an administrator');
    console.log('jwt verificado!');
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json('Invalid Json Web Token!');
  }
};

module.exports = adminVerifyJwt;