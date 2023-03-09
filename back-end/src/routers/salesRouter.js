const express = require('express');
const { create, getById,
   getProductsBySeller, getAllSalesController, update } = require('../Controllers/salesController');

const router = express.Router();

router.get('/order', getAllSalesController);
router.get('/:saleId', getById);
router.get('/', getProductsBySeller);
router.post('/', create);
router.put('/:saleId', update)

module.exports = router;
