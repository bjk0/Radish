const Cart = require('../models/cart');

exports.getData = async (req, res) => {
    try {
        const docs = await Cart.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
    } 
};