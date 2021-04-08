const bcrypt = require('bcryptjs');
const models = require('../models/sickBayModels');

const userController = {};

// ADD USER TO DATABASE
userController.addUser = (req, res, next) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  models.User.create({ username: username , password: hash },
    (err, user) => {
      if (err) return next({ log: err, message: 'userController.addUser failed' });
      if (user) {
        res.locals.user = user;

        return next();
      }
    });
};

// VERIFY USER INFORMATION IN DB
userController.login = (req, res, next) => {
  const { username, password } = req.body;
  models.User.findOne({ username },
    (err, user) => {
      if (err) return next({ log: err, message: 'userController.login failed' });
      if (user === null) {
        res.locals = 'The username and password you entered did not match our records. Please double-check and try again.'; // previous
        return next();
      }
      const verified = bcrypt.compareSync(password, user.password);
      // res should be user from line 22
      if (verified){ res.locals.user = user// (PREVIOUS) res.locals = 'You have been successfully logged in. Welcome Back!';
      console.log("you have been loged in! :", user);
    }
      else res.locals = 'The username and password you entered did not match our records. Please double-check and try again.';
      return next();
  });
}

userController.isLoggedIn = (req, res, next) => {
  
  if (!req.cookies.ssid) {
    res.locals.username = null;
    return next();
  } else {
    models.User.findOne({ _id: req.cookies.ssid},
      (err, user) => {
        if (err) return next({ log: err, message: 'userController.isLoggedIn failed' });
        console.log(user.username);
        res.locals.username = user.username;
        return next();
    });
  }
}

// userController.setSSIDCookie
// setSSIDCookie - middleware to store the user id in a cookie ----------------------------
userController.setSSIDCookie = (req, res, next) => {
  // console.log('The res.locals in userController is: ', res.locals);
  res.cookie('ssid', res.locals.user.id, { httpOnly: true });
  res.locals.ssid = res.locals.user.id
  // console.log("this is our locals ssid: ", res.locals.ssid)
  return next();
}
// ----------------------------------------------------------------------------------------




module.exports = userController;
