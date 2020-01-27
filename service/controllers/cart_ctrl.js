const Cart = require('../models/cart');

exports.getData = async (req, res) => {
    try {
        const docs = await Cart.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
    } 
};

exports.postCart = async (req,res) => {
    try{
        let obj = await Cart.find({id : req.body.id}, (err) =>{
            if(err) throw err;
        });

        if(obj.length != 0) throw {
            message: 'id number already exists chose diffrent one'
        };

        var today = new Date();
        var dd = today.getDate();
        
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 
        
        if(mm<10) 
        {
            mm='0'+mm;
        } 

        today = dd+'/'+mm+'/'+yyyy;

        let c = new Cart(
            {
                id: req.body.id,
                productId : [],
                state : 0,
                date:  today
            }
        );
        c.save();
        res.send('cart created successfully');
    }catch(err){
        res.status(400).send(err);
    }
};
