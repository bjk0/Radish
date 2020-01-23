const mongoose = require('mongoose');
const product = {
    id : {type: Number, index: 1 },
    title : String,
    imageName : String,
    price :  Number,
    acquired: Number,
    popularity: Number
};

const productSchema = new mongoose.Schema(product);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;