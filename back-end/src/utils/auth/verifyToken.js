require('dotenv/config');
const jwt = require('jsonwebtoken');

// const fs = require('fs');

// const secret =  fs.readFileSync('../../../jwt.evaluantion.key', { encoding: 'utf-8' });
const secret = 'meu segredo';

const veryfyToken = (token) => jwt.verify(token, secret);

module.exports = veryfyToken;
