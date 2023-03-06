const express = require('express');
const { create, getById, getProductsBySeller } = require('../Controllers/salesController');

const router = express.Router();

router.post('/', create);
router.get('/:saleId', getById);
router.get('/', getProductsBySeller );

module.exports = router;
