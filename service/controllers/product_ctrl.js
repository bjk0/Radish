const Product = require('../models/product');

exports.getData = async (req, res) => {
    try {
        const docs = await Product.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
    } 
   };