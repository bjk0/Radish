const mongoose = require('mongoose');

const userProduct={
    prodId: {
      type: Number
    },
    algRating: {
      type: Number
    },
    date: {
      type: [String]
    }
  }
  
  const user={
    userName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    userProducts: {
      type: [userPruduct]
    }
  } 
;

const userSchema = new mongoose.Schema(user);
const User = mongoose.model('Product',userSchema);

module.exports = User;