
//add in DB
const mongoose = require('mongoose');
const cart = {
    id : {type: Number, index: 1 },
    productId : [Number],
    state : Number,
    date:  String
};

const cartSchema = new mongoose.Schema(cart);
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;