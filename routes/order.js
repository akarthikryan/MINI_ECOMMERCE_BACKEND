const express = require('express');
const router = express.Router();
const { createOrder } = require('../backend/controllers/orderController');

router.route('/order').post(createOrder);

module.exports = router;