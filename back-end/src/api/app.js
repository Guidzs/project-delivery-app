require('express-async-errors');
const cors = require('cors');

const express = require('express');
const path = require('path');

const HttpException = require('../utils/HttpError');

const error = new HttpException();

const loginRouter = require('../utils/routers/loginRouter');

const registerRouter = require('../utils/routers/registerRouter');

const app = express();

app.use(cors());
const IMAGES_PATH = path.resolve(__dirname, '../../public');

app.get('/coffee', (_req, res) => res.status(418).send("polar"));
app.use('/images', express.static(IMAGES_PATH));


app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/log', (_req, res) => res.status(200).json({ ok: true }));

app.use(express.json());

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use(() => error);

module.exports = app;
