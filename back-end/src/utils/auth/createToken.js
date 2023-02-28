const jwt = require('jsonwebtoken');
const path = require('path');

const fs = require('fs');

const secret = () => fs.readFileSync(
  path.resolve(__dirname, '../../../jwt.evaluation.key'), 
  { encoding: 'utf-8' },
);

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (data) => jwt.sign({ ...data }, secret(), jwtConfig);

module.exports = createToken;
