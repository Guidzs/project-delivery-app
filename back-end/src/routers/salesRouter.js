const express = require('express');
const { create } = require('../Controllers/salesController');

const router = express.Router();

router.post('/', create);

module.exports = router;
