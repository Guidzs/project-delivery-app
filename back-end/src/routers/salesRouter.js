const express = require('express');
const { create, getById,
   getProductsBySeller, getAllSalesController } = require('../Controllers/salesController');

const router = express.Router();

router.get('/order', getAllSalesController);
router.get('/:saleId', getById);
router.get('/', getProductsBySeller);
router.post('/', create);

module.exports = router;
