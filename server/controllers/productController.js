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

// ADD NEW PRODUCTS
productController.addProducts = (req, res, next) => {
  const newProducts = req.body;
  models.Product.insertMany(newProducts)
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
  const regexString = '^' + productName;
  console.log(regexString);
  models.Product.find({ Title: { $regex : regexString, $options: 'i' } },
    'Title Description Price ImageURL Category',
    { limit: 20 },
    (err, product) => {
      if (err) return next({ log: err, message: { err: 'productController.getSearchedProducts failed.' } });
      product.push('hello')
      res.locals = product;
      next();
    })
};

// ============ !!!DANGER DANGER DANGER!!! ============
// CLEAN DATABASE
productController.deleteProducts = (req, res, next) => {
  models.Product.deleteMany({})
    .then(() => {
      next();
    })
    .catch((err) => next({
      log: err,
      message: { err: 'productController.addProducts failed.' },
    }));
};

module.exports = productController;
