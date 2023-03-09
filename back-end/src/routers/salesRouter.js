const express = require('express');
const { create, getById,
   getProductsBySeller, getAllSalesController, update,
   updateCustomer } = require('../Controllers/salesController');

const router = express.Router();

router.get('/order', getAllSalesController);
router.get('/:saleId', getById);
router.get('/', getProductsBySeller);
router.post('/', create);
router.put('/:saleId', update);
router.put('customer/:saleId', updateCustomer);

module.exports = router;
