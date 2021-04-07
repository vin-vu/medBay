const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'medBay',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const productSchema = new Schema({
  Title: { type: String, required: true },
  Description: String,
  Category: String,
  ImageURL: String,
  Price: Number,
  Quantity: Number,
});

const Product = mongoose.model('product', productSchema);

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// const cartSchema = new Schema({
//   products: [
//     {
//       title: String, // productTitle
//       quantity: { type: Number, default: 0 },
//       id: {
//         type: Schema.Types.ObjectId,
//         ref: 'product'
//       }
//     },
//   ]
// })

// const Cart = mongoose.model('cart', cartSchema);


module.exports = {
  Product,
  User,
};
