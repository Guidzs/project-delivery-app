const express = require('express');
const { create, getById } = require('../Controllers/salesController');

const router = express.Router();

router.post('/', create);
router.get('/:saleId', getById);

module.exports = router;
