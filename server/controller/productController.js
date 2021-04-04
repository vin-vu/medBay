const fs = require('fs');
const path = require('path');
const models = require('../models/sickBayModels.js');

const productController = {};

productController.itemSearch = (req, res, next) => {
  const itemName = req.body;
  models.Product.find({ Title: itemName }, { limit: 20 },
    (err, products) => {
      if (err) {
        next(err);
      }
      res.locals.products
    })
}

//your code....
module.exports = productController;