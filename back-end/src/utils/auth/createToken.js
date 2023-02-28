require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const createToken = (data) => jwt.sign({ data }, secret, jwtConfig);

  module.exports = createToken;
