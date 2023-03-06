const express = require('express');
const { create, getById, getAllSalesController } = require('../Controllers/salesController');

const router = express.Router();

router.post('/', create);
router.get('/:saleId', getById);
router.get('/', getAllSalesController);

module.exports = router;
