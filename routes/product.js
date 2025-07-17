const express = require('express');
const { getProducts, getSingleProduct } = require('../backend/controllers/productController');
const { get } = require('http');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);

module.exports = router;