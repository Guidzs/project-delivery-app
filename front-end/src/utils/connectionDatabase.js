const axios = require('axios');

const connectionDatabase = axios.create({
  baseURL: 'http://localhost:3001/',
});

module.exports = connectionDatabase;

/*
exemplo na documentação
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
*/
