const express = require('express');
const { getAllProducts, getProductById, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.post('/', createProduct);

module.exports = router;
