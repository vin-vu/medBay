const bcrypt = require('bcryptjs');
const models = require('../models/sickBayModels');

const userController = {};

// ADD USER TO DATABASE
userController.addUser = (req, res, next) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  models.User.create({ username, password: hash },
    (err) => {
      if (err) return next({ log: err, message: 'userController.addUser failed' });
      return next();
    });
};

module.exports = userController;
