require('dotenv/config');
const jwt = require('jsonwebtoken');

// const fs = require('fs');

// const secret = async () =>  fs.readFileSync('../../../jwt.evaluation.key', { encoding: 'utf-8' });
 const secret = 'meu segredo';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const createToken = (data) => jwt.sign({ data }, secret(), jwtConfig);

  module.exports = createToken;
