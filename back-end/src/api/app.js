const express = require('express');
const path = require('path');

const app = express();

const IMAGES_PATH = path.resolve(__dirname, '../../public');

app.get('/coffee', (_req, res) => res.status(418).send("polar"));
app.use('/images', express.static(IMAGES_PATH));

module.exports = app;
