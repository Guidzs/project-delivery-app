require('express-async-errors')

const express = require('express');

const HttpException = require('../utils/HttpError');

const error = new HttpException();

const loginRouter = require('../utils/routers/loginRouter');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json());

app.use('/login', loginRouter);

app.use(() => error);

module.exports = app;
