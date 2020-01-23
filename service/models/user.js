const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProduct = new Schema({
    prodId: {
      type: Number
    },
    algRating: {
      type: Number
    },
    date: {
      type: [String]
    }
  });
  
  const user = new Schema({
    userName: String,
    email: String,
    password: String,
    userProduct: [userProduct]
  });

const userSchema = new mongoose.Schema(user);
const User = mongoose.model('User',userSchema);

module.exports = User;