const express = require('express');
const { create, getById,
   getProductsBySeller } = require('../Controllers/salesController');

const router = express.Router();

router.get('/:saleId', getById);
router.get('/', getProductsBySeller);
// router.get('/', getAllSalesController);
router.post('/', create);

module.exports = router;
