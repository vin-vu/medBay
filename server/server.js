const express = require('express');

const app = express();
const api = require('./routes/api.js');
const models = require('./models/sickBayModels.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

// GET ALL
app.get('/api/allProducts', (req, res) => {
  models.Product.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
// GET FIRST 25 IMAGES
app.get('/api/topProducts', (req, res) => {
  models.Product.find({}).limit(25)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
// POST
app.post('/api/addProduct', (req, res) => {
  const newProduct = req.body;
  models.Product.create(newProduct)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// error handler
const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' },
};
app.use((req, res, next) => {
  res.status(404).send('Nothing to see here.');
});
// global error handler
app.use((err, req, res, next) => {
  const errorObj = Object.assign(err, defaultErr);
  res.status(errorObj.status).json(errorObj.message);
});

// listen to port 3000
app.listen(3000, () => console.log('Server Running'));