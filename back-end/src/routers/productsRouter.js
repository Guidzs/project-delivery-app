const express = require('express');
const productsController = require('../Controllers/productsController');

const router = express.Router();

router.get('/', productsController);

module.exports = router;
