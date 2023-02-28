require('express-async-errors');
const cors = require('cors');

const express = require('express');

const HttpException = require('../utils/HttpError');

const error = new HttpException();

const loginRouter = require('../utils/routers/loginRouter');

const registerRouter = require('../utils/routers/registerRouter');

const app = express();

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/log', (_req, res) => res.status(200).json({ ok: true }));

app.use(express.json());

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use(() => error);

module.exports = app;
