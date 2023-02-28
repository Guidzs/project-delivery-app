require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret =  'seusecretdetoken';

const veryfyToken = (token) => jwt.verify(token, secret);

module.exports = veryfyToken
