const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const cartController = require('../controllers/cartController')
const router = express.Router();


// ------------------------USER CONTROLLERS---------------------------------------------------//

// ADD NEW USER TO DATABASE
router.post('/signup', userController.addUser, userController.setSSIDCookie, cartController.createCart, (req, res) => {
  res.status(200).json(res.locals);
});

// VERIFY USER INFORMATION FROM DB // LOGIN
router.post('/login', userController.login, userController.setSSIDCookie, cartController.getCart, (req, res) => {
  res.status(200).json(res.locals);
});

//VERIFY IF USER IS LOGED IN 
router.get('/isLoggedIn', userController.isLoggedIn, (req, res) => {
  res.status(200).json(res.locals);
});

// DELETE COOKIES WHEN USER LOGSOUT
router.get('/signout', (req, res) => {
  res.clearCookie('ssid');
  res.send('cookie ssid cleared');
});

//-------------------------------------------------------------------------------------------------//




//---------------------------PRODUCT CONTROLLERS------------------------------------------------//

// ADD NEW PRODUCTS
router.post('/product', productController.addProducts, (req, res) => {
  res.status(200).json(res.locals);
});

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


// GET ALL ITEMS THAT PERTAIN TO THE SEARCHED NAME OF ITEM
router.post('/productSearch', productController.getSearchedProducts, (req, res) => {
  res.status(200).json(res.locals);
});

// ============ !!!DANGER DANGER DANGER!!! ============
// DELETE ALL PRODUCS FROM DATABASE
router.delete('/product', productController.deleteProducts, (req, res) => {
  res.status(200).json('database cleaned!');
});






//-----------------------------------------------------------------------------------------------------//



//-------------------------------------CART CONTROLLERS--------------------------------------------//




// CREATE EMPTY CARD WHEN USER SIGNSUP/LOGSIN
router.get('/createCart', cartController.createCart, (req,res) => {
  res.status(200).json(res.locals);
});


// CREATE ROUTE TO SENT USER CART TO FRONTEND
router.get('/getCartUser', cartController.getCartUser, (req, res) => {
  res.status(200).json(res.locals);
});

// ADDING TO CART
// FIND ITEM IN PRODUCT DATABASE
router.post('/addCart', cartController.getCartProduct, cartController.addCart, (req, res) => {
  res.status(200).json(res.locals);
});

// DELETE PRODUCT FROM USER CART
router.post('/deleteUserProduct', cartController.deleteUserProduct, (req, res) => {
  res.status(200).json(res.locals);
});


//-----------------------------------------------------------------------------------------------------//







module.exports = router;
