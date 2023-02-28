const express = require('express');

const HttpException = require('../utils/HttpError');

const loginRouter = require('../utils/routers/loginRouter');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json());

app.use('/login', loginRouter);

app.use(HttpException);

module.exports = app;
