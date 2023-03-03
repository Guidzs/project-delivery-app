require('dotenv/config');
const jwt = require('jsonwebtoken');
const path = require('path');

const fs = require('fs');

const secret = () => fs.readFileSync(
  path.resolve(__dirname, '../../../jwt.evaluation.key'),
  { encoding: 'utf-8' },
);

const veryfyToken = (token) => jwt.verify(token, secret());

module.exports = veryfyToken;
