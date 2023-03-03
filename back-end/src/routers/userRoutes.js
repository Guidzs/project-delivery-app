const express = require('express');
const { sellerByName } = require('../Controllers/usersController');

const router = express.Router();

router.get('/seller', sellerByName);

module.exports = router;
