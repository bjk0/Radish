const Product = require('../models/product');
const dateGenerate = require('../createDate');


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
};

exports.postProduct = async (req,res) => {
    try{
        let obj = await Product.find({id : req.body.id}, (err) =>{
            if(err) throw err;
        });

        if(obj.length != 0) throw {
            message: 'id number already exists chose diffrent one'
        };

        let p = new Product(
            {
                id: req.body.id,
                title: req.body.title,
                imageName: req.body.imageName,
                price: req.body.price,
                acquired: [],
                popularityIndex: null
            }
        );
        p.save();
        res.send('product created successfully');
    }catch(err){
        res.status(400).send(err);
    }
};

exports.putProduct = async (req, res) => {
    try{
        let obj = await Product.find({id : req.params.id}, (err) =>{
            if(err) throw err;
        });

        if(obj.length == 0) throw {
            message:   'no content' 
        };
        obj = obj[0];
        if(req.body.title)
            obj.title = req.body.title;

        if(req.body.imageName)
            obj.imageName = req.body.imageName;

        if(req.body.price)
            obj.price = req.body.price;

        await Product.updateOne({id : req.params.id},obj, (err)=>{
            if(err) throw err;
        })
        res.status(200).send('success');
    }catch(err){
        res.status(500).send(err);
    }
 };


exports.deleteProduct = async(req, res) =>{
    try{
        let obj = await Product.find({id : req.params.id}, (err) =>{
            if(err) throw err;
        });

        if(obj.length == 0) throw {
            message: 'no content'
        };
        await Product.deleteOne({id : req.params.id});
        res.status(200).send('deleted');
    }catch(err){
        res.status(500).send(err);
    }
}

exports.addDate = async(req) =>{
    try{
        let obj = await Product.find({id : req}, (err) =>{
            if(err) throw err;
        });

        if(obj.length == 0) throw {
            message: 'no content'
        };
        obj = obj[0];


      var today = dateGenerate.getTodayDate();

        
        obj.acquired.push(today);
        obj.popularityIndex++;

        await Product.updateOne({id : req}, obj, (err) =>{
            if(err) throw err;})


    }catch(err){
        console.log("Cant addDate");
    }
}
