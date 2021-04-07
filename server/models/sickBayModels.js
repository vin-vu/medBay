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

// ------CREATE A PRODUCTS SCHEMA------------------
const productSchema = new Schema({
  Title: { type: String, required: true },
  Description: String,
  Category: String,
  ImageURL: String,
  Price: Number,
  Quantity: Number,
});

const Product = mongoose.model('product', productSchema);


//---------CREATE AN USERS SCHEMA
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});

const User = mongoose.model('User', userSchema);

// {
// _id: 606cf6e64ef9f384e0ff9f0a
// Title: "Face Shield Visor for Infection Control"
// Description: "Protects entire face from splatters of liquid. Impact resistant. Anti-..."
// Category: "PPE"
// ImageURL: "https://fetchppe.online/u_file/2004/products/07/a8128aca75.jpg.640x640..."
// Price: 7.99
// Quantity: 45
// __v: 0
// }

// -------CREATE A CART SCHEMA---------------
const cartSchema = new Schema({
  // hold quantity defaults to 0
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },

  products: [{
    Title: String,
    ImageURL: String,
    productId: Number,
    quantity: Number,
    price: Number
   }],
  // products: [
  //   {
  //     title: String,
  //     quantity: Number,
  //     id: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'product',
  //     }
  //   },
  // ]
})

const Cart = mongoose.model('cart', cartSchema);


module.exports = {
  Product,
  User,
  Cart
};

// products: [
//   {
//     title: String,
//     quantity: Number,
//     id: {
//       type: Schema.Types.ObjectId,
//       ref: 'product',
//     }
//   },