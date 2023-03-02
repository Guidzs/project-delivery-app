require('express-async-errors');
const cors = require('cors');

const express = require('express');
const path = require('path');

const HttpException = require('../utils/HttpError');

const error = new HttpException();

const loginRouter = require('../routers/loginRouter');
const registerRouter = require('../routers/registerRouter');
const productsRouter = require('../routers/productsRouter');
const userRoutes = require('../routers/userRoutes');

const app = express();

app.use(cors());
const IMAGES_PATH = path.resolve(__dirname, '../../public');

// ROTAS
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).send('polar'));
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/images', express.static(IMAGES_PATH));
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/users', userRoutes)

app.use(() => error);

module.exports = app;
