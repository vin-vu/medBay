const models = require('../models/sickBayModels');

const productController = {};

// GET ALL PRODUCTS
productController.getProducts = (req, res, next) => {
  models.Product.find({})
    .then((data) => {
      res.locals = data;
      next();
    })
    .catch((err) => next({
      log: err,
      message: { err: 'productController.getProducts failed.' },
    }));
};

// GET TOP 8 PRODUCTS
productController.getTopProducts = (req, res, next) => {
  models.Product.find({}).limit(8)
    .then((data) => {
      res.locals = data;
      next();
    })
    .catch((err) => next({
      log: err,
      message: { err: 'productController.getProducts failed.' },
    }));
};

// ADD A NEW PRODUCT
productController.addProducts = (req, res, next) => {
  const newProduct = req.body;
  models.Product.create(newProduct)
    .then((data) => {
      res.locals = data;
      next();
    })
    .catch((err) => next({
      log: err,
      message: { err: 'productController.addProducts failed.' },
    }));
};


// GET PRODUCTS THAT PERTAINS TO THE WHAT THE USER SEARCHED
productController.getSearchedProducts = (req, res, next) => {
  const { productName } = req.body;
  models.Product.find({ Title: productName },
    'Title Description Price ImageURL Category',
    { limit: 20 },
    (err, product) => {
      if (err) return next({ log: err, message: { err: 'productController.getSearchedProducts failed.' } });
      product.push('hello')
      res.locals = product;
      next();
    })
};

module.exports = productController;
