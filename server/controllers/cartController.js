const { model } = require('mongoose');
const models = require('../models/sickBayModels');

// Declare object defined as cartController where we will store middleware functionality
const cartController = {};

// Create a cart when a user signs up
cartController.createCart = (req, res, next) => {
  // Declare const username assignend to the response locals ssid
  const username = res.locals.ssid;
  const array = [];
  // Using the model from sickBayModels, import the cart model using the create method from monogoose
  models.Cart.create({ userId: username , products: array },
    (err, user) => {
      // If, user does not exist, log err message
      if (err) return next({ log: err, message: 'cartController.addUser failed' });
      // If, user does exist, assign user to response locals .user
      if (user) {
        res.locals.user = user;
        // Invoke next middleware
        return next();
      }
  });
}

// FIND USER CART AND SEND IT TO THE CLIENT
cartController.getCart = (req, res, next) => {
  // Declare const username assignend to the response locals ssid
  const username = res.locals.ssid;
  // Retrieve users cart by using .find method on username
  models.Cart.find({userId: username})
  .then((cart) => {
    // Using .then, send a promise to assign the data received to response locals .cart
    res.locals.cart = cart;
    // Invoke next middleware
    next();
  })
  // If there's any errors, using .catch, catch  all errors and log the message received
  .catch((err) => ({
    log: err,
    message: { err: 'cartController.getCart failed'}
  }));
}

// FIND USER CART WHEN ALREADY LOGGED IN
cartController.getCartUser = (req, res, next) => {
  // Declare const username assignend to the response cookies ssid
  const username = req.cookies.ssid;
  // Retrieve users cart by using .find method on username
  models.Cart.find({userId: username})
  .then((cart) => {
    // Using .then, send a promise to assign the data received to response locals .cart
    res.locals.cart = cart;
    // Invoke next middleware
    next();
  })
  // If there's any errors, using .catch, catch  all errors and log the message received
  .catch((err) => ({
    log: err,
    message: { err: 'cartController.getCart failed'}
  }));
}

// GETTING A PRODUCT FROM PRODUCT DATABASE
cartController.getCartProduct = (req, res, next) => {
  // Using deconstruction, create a const id from the req.body
  const { id } = req.body;
  // Using the const id, find the products Id using findById method
  models.Product.findById(id)
  .then((product) => {
    // Using .then, send a promise to assign the data received to response locals .product
    res.locals.product = product;
    // Invoke next middleware
    next();
  })
  // If there's any errors, using .catch, catch  all errors and log the message received
  .catch((err) => ({
    log: err,
    message: { err: 'cartController.addCart failed'}
  }));
};


// ADDING INTO USER'S CART AND UPDATE QUANTITY FUNCTIONALITY
cartController.addCart = async (req, res, next) => {
  // Declare const username assignend to the response locals ssid
  const usernameId = req.cookies.ssid;

  // Declare a variable named alreadyExist with the value of false which will later be used to check if item does exist in cart or not
  let alreadyExist = false;
  // Declare a const named cart which uses await promise using the model from sickBayModels to find the users cart with the use of .findOne method on the User's Id
  let cart = await models.Cart.findOne({userId: usernameId})

  for (let i = 0; i < cart.products.length; i += 1) {
    // Using a for loop to access each index within the cart, check if each value at index is equivalent to the response locals product id to check if product exists in cart
    if (cart.products[i].productId === res.locals.product._id.toString()) {
      // If true, reassign the alreadyExist variable to true
      alreadyExist = true;
    } 
  }

  // If, alreadyExist is still false
  if (alreadyExist === false) {
    models.Cart.findOneAndUpdate({userId: usernameId},
      // Since the current product does not exist in the cart array, using the findOneAndUpdate to find the User's Id and will push the products title, image, productId, and price
      {$push: {products:
        {
          Title: res.locals.product.Title,
          ImageURL: res.locals.product.ImageURL,
          productId: res.locals.product._id,
          price: res.locals.product.Price,
          }
    }})
    .then((cart) => {
      // Using a .then, create a promise to assign this data's info to response locals .cart
      res.locals.cart = cart;
      // Invoke next middleware
      next();
    })
    // If there's any errors, using .catch, catch  all errors and log the message received
    .catch((err) => ({
      log: err,
      message: { err: 'cartController.getCart failed'}
    }));
    // if, item alreadyExist's in cart
  } else if (alreadyExist === true) {
    // Since the current product does exist in the cart array, we will increment the products current quantity by 1 the update method as well as using $inc
    models.Cart.updateOne(
      {userId: usernameId, 'products.productId': res.locals.product._id.toString()}, {$inc: {"products.$.quantity": 1}})
    .then((cart) => {
      // Using a .then, create a promise to assign this data's info to response locals .cart
      res.locals.cart = cart;
      // Invoke next middleware
      next();
    })
    // If there's any errors, using .catch, catch  all errors and log the message received
    .catch((err) => ({
      log: err,
      message: { err: 'cartController.getCart failed'}
    }));
  }
}

// CART CONTROLLER TO DELETE SELECTED USER ITEM ON USER CART
cartController.deleteUserProduct = (req, res, next) => {
  // Declare const username assignend to the response locals ssid
  const usernameId = req.cookies.ssid;
  // Declare a const called ProductId with the value of the requests body .id
  const productId = req.body.id;
  
  models.Cart.updateOne(
     // Following the format of the Cart that was imported from mongoose, we use the updateOne method to intially pull the User's Id, then using the pull method to delete the specific item from the cart
    {userId: usernameId},
    { $pull: { products: { productId: productId } } }
  )
  .then((cart) => {
    // Using a .then, create a promise to assign this data's info to response locals .cart
    res.locals.cart = cart;
    // Invoke next middleware
    next();
  })
  // If there's any errors, using .catch, catch  all errors and log the message received
  .catch((err) => ({
    log: err,
    message: { err: 'cartController.getCart failed'}
  }));
}



module.exports = cartController;
