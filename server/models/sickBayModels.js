const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'sickBay',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const productSchema = new Schema({
  status: { type: String, default: 'ok' },
  message: String,
});

const Product = mongoose.model('product', productSchema);

module.exports = {
  Product,
};
