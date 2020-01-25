const Product = require('../models/product');

exports.getData = async (req, res) => {
    try {
        const docs = await Product.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
    } 
   };

   exports.getByID = async (req, res) =>  {
        try {
    const docs = await Product.find({id : req.params.id}, (err)=>{
        if(err) throw err;
    });
      
    if(docs.length == 0) throw {
        message: 'no content'
    };
    res.status(200).json(docs[0]);
}catch(err){
     res.status(500).send(err);
} 
   }