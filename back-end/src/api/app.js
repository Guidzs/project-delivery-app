const express = require('express');
const { default: ErrorMiddleware } = require('../middleware/middlewareError');
require('express-async-errors');

const loginRouter = require('../utils/routers/loginRouter');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json());

app.use('/login', loginRouter);

app.use(ErrorMiddleware);

module.exports = app;
