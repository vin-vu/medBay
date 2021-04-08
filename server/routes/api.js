const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const router = express.Router();

// GET ALL PRODUCTS
router.get('/allProducts', productController.getProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// GET FIRST 8 IMAGES
router.get('/topProducts', productController.getTopProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// GET CATEGORY LIST
router.get('/categoryList', productController.getCategoryList, (req, res) => {
  res.status(200).json(res.locals);
});

// GET SPECIFIC CATEGORY PRODUCTS
router.get('/categoryProducts', productController.categoryProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// CREATE EMPTY CARD WHEN USER SIGNSUP/LOGSIN
router.get('/createCart', productController.createCart, (req,res) => {
  res.status(200).json(res.locals);
});

// CREATE ROUTE TO SENT USER CART TO FRONTEND
router.get('/getCartUser', productController.getCartUser, (req, res) => {
  res.status(200).json(res.locals);
});
// ADDING TO CART
// FIND ITEM IN PRODUCT DATABASE
router.post('/addCart', productController.getCartProduct, productController.addCart, (req, res) => {
  res.status(200).json(res.locals);
});

// VERIFY USER INFORMATION FROM DB // LOGIN
router.post('/login', userController.login, userController.setSSIDCookie, productController.getCart, (req, res) => {
  res.status(200).json(res.locals);
});

// ADD NEW PRODUCTS
router.post('/product', productController.addProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ADD NEW USER TO DATABASE
router.post('/signup', userController.addUser, userController.setSSIDCookie, productController.createCart, (req, res) => {
  res.status(200).json(res.locals);
});

// GET ALL ITEMS THAT PERTAIN TO THE SEARCHED NAME OF ITEM
router.post('/productSearch', productController.getSearchedProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ============ !!!DANGER DANGER DANGER!!! ============
// DELETE ALL PRODUCS FROM DATABASE
router.delete('/product', productController.deleteProducts, (req, res) => {
  res.status(200).json('database cleaned!');
});

module.exports = router;
