const express = require('express');
const models = require('../models/sickBayModels');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('itemSearch', productController.itemSearch())




module.exports = router;