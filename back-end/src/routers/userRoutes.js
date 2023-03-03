const express = require('express');
const { sellerController } = require('../Controllers/usersController');

const router = express.Router();

router.get('/seller', sellerController);

module.exports = router;
