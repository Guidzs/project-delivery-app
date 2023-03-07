const express = require('express');
const { create, getById,
  getAllSalesController, getProductsBySeller } = require('../Controllers/salesController');

const router = express.Router();

router.get('/:saleId', getById);
router.get('/', getAllSalesController);
router.post('/', create);
router.get('/', getProductsBySeller);

module.exports = router;
