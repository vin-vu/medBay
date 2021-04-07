const { model } = require('mongoose');
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
      message: { err: 'productController.getTopProducts failed.' },
    }));
};

// GET CATEGORY LIST
productController.getCategoryList = (req, res, next) => {
  models.Product.distinct('Category')
    .then((data) => {
      res.locals = data;
      next();
    })
    .catch((err) => next({
      log: err,
      message: { err: 'productController.getCategoryList failed.' },
    }));
};

// GET SPECIFIC CATEGORY PRODUCTS
productController.categoryProducts = (req, res, next) => {
  const { query } = req;
  models.Product.find(query)
    .then((data) => {
      res.locals = data;
      next();
    })
    .catch((err) => next({
      log: err,
      message: { err: 'productController.categoryProducts failed.' },
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
  models.Product.find({ Title: { $regex: productName, $options: 'i' } },
    'Title Description Price ImageURL Category Quantity',
    { limit: 20 },
    (err, products) => {
      if (err) return next({ log: err, message: { err: 'productController.getSearchedProducts failed.' } });
      res.locals = products;
      next();
    });
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

//-------------------------EVERYTHING ABOVE IS RELATED TO THE PRODUCTS--------------------------------------------//




//-------------------------THESE ARE OUR CART CONTROLLERS --------------------------------------------------------//



// creating a cart  when an user signsup
productController.createCart = (req, res, next) => {
  // const { username, array} = req.body;
  // console.log(res.locals);
  // console.log("this is locals ssid inside CREATE cart: ", res.locals.ssid)
  //The req.cookies.ssid looks like this => 606df159489a8313a00f296e
  const username = res.locals.ssid;
  const array = [];
  models.Cart.create({ userId: username , products: array },
    (err, user) => {
      if (err) return next({ log: err, message: 'userController.addUser failed' });
      if (user) {
        res.locals.user = user;
       
        return next();
      }
  });
}

// FIND USER CART AND SEND IT TO THE CLIENT
productController.getCart = (req, res, next) => {
  console.log("this is locals ssid inside GET cart: ", res.locals.ssid)
  const username = res.locals.ssid;
  models.Cart.find({userId: username})
  .then((cart) => {
    res.locals.cart = cart;
    console.log('our cart: ', res.locals.cart)
    next();
  })
  .catch((err) => ({
    log: err,
    message: { err: 'productController.getCart failed'}
  }));
}

// GETTING A PRODUCT FROM PRODUCT DATABASE
// $push into cart schema
productController.getCartProduct = (req, res, next) => {
  // This is what the client should send: {id: 606d3ad382f8173e94b23732}
  const { id } = req.body
  // console.log("this is our body: ", id)
  models.Product.findById(id)
  .then((product) => {
    res.locals.product = product;
    // console.log('our data: ', res.locals.product)
    next();
  })
  .catch((err) => ({
    log: err,
    message: { err: 'productController.addCart failed'}
  }));
};



// Adding products to cart to existing user
productController.addCart = (req, res, next) => {
  // console.log('these are our cookies: ', req.cookies)
  // console.log("passed down data: ", res.locals.product)
  const usernameId = req.cookies.ssid;
  models.Cart.find({userId: usernameId})
  .then((cart) => {
    console.log('our cart: ', cart.products)
     cart.products.push({
      Title: res.locals.product.Title,
      ImageURL: res.locals.product.ImageURL,
      productId: res.locals.product._id,
      quantity: 1,
      price: res.locals.product.Price
     })
    console.log('cart updated')
     next();
  })
  .then(() => {
    res.locals.cart = cart.save()
    console.log("this is our updated products cart: ", res.locals.cart)
    next();
  })
  .catch((err) => ({
    log: err,
    message: { err: 'productController.addCart failed'}
  }));



  // FIND THE CORRECT CART (CORRECT CART MEANS USER'S CART or TEMP CART)
    // THEN PUSH ITEMS TO CART
  //models.Cart.insertMany()
  // console.log("this is our body: ", id)
  // models.Product.findById(id)
  // .then((data) => {
  //   res.locals = data;
  //   console.log('our data: ', res.locals)
  //   next();
  // })
  // .catch((err) => ({
  //   log: err,
  //   message: { err: 'productController.addCart failed'}
  // }));
}

// productController.addCart = (req, res, next) => {
//   // console.log('these are our cookies: ', req.cookies)
//   // console.log("passed down data: ", res.locals.product)
//   const usernameId = req.cookies.ssid;
//   models.Cart.find({userId: usernameId})
//   .then((cart) => {
//     console.log('our cart: ', cart.products)
//      cart.products.push({
//       Title: res.locals.product.Title,
//       ImageURL: res.locals.product.ImageURL,
//       productId: res.locals.product._id,
//       quantity: 1,
//       price: res.locals.product.Price
//      })
//     console.log('cart updated')
//      next();
//   })
//   .then(() => {
//     res.locals.cart = cart.save()
//     console.log("this is our updated products cart: ", res.locals.cart)
//     next();
//   })
//   .catch((err) => ({
//     log: err,
//     message: { err: 'productController.addCart failed'}
//   }));

module.exports = productController;
