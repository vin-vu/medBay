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
