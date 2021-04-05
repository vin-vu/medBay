const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// GET ALL PRODUCTS
router.get('/allProducts', productController.getProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// GET FIRST 8 IMAGES
router.get('/topProducts', productController.getTopProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ADD NEW PRODUCTS
router.post('/product', productController.addProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ============ !!!DANGER DANGER DANGER!!! ============
// DELETE ALL PRODUCS FROM DATABASE
router.delete('/product', productController.deleteProducts, (req, res) => {
  res.status(200).json('database cleaned!');
});

module.exports = router;
