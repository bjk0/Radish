const mongoose = require('mongoose');
const product = {
    id : {type: Number, index: 1 },
    title : String,
    imageName : String,
    price :  Number,
    acquired: [String],
    popularityIndex: Number
};

const productSchema = new mongoose.Schema(product);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;