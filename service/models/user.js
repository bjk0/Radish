const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProduct = new Schema({
    prodId: Number,
    algRating:Number,
    date:[String]
  });
   
  const user = new Schema({
    userName: String,
    email: {type: String, require: true },
    password: String,
    userCartHistory:[Number],
    userProduct: [userProduct]
  });

const userSchema = new mongoose.Schema(user);
const User = mongoose.model('User',userSchema);

module.exports = User;