const express = require('express');
const { create, getById, getProductsBySeller } = require('../Controllers/salesController');

const router = express.Router();

router.get('/:saleId', getById);
router.post('/', create);
router.get('/', getProductsBySeller);

module.exports = router;
