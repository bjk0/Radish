const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProduct = new Schema({
    prodId: Number,
    algRating:Number,
    date:[String]
  });
   
  const user = new Schema({
    userName: {type: String, require: true },
    email: {type: String, require: true },
    password: String,
    userCartHistory:[Number],
    userProduct: [userProduct]
  });

const userProductSchema = new mongoose.Schema(userProduct);
const UserProduct = mongoose.model('UserProduct', userProductSchema);
const userSchema = new mongoose.Schema(user);
const User = mongoose.model('User',userSchema);

module.exports = User;
module.exports = UserProduct;