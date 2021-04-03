const express = require('express');

const app = express();
const models = require('./models/sickBayModels');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// listen to port 3000
app.listen(3000, () => console.log('Server Running'));
