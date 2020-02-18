const User  = require('../models/user');
const dateGenerate = require('../createDate');
const validationResult = require("express-validator");
const prodCtrl = require('../controllers/product_ctrl')

exports.getData = async (req, res) => {
    try {
        const docs = await User.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
    }  
};

exports.userGetByID = async (req, res) =>  {
  try {
  const docs = await User.find({id : req.params.id}, (err)=>{
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



exports.Login = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { userName , password } = req.body;
    
    let user = await User.findOne({
      userName
    }); 
    if (!user)
      return res.status(400).json({
        message: "User Not Exist"
      });
    if (password != user.password){
      return res.status(400).json({
        message: "Incorrect Password! " + user.password + "  " + password
      });}else{
      return res.status(200).json({
        message: "You are logged in!" // Add redirect
        });
      }
};
    

exports.put_acceptToCart = async (req, res) => {
  try{
      var alg = 1;
      var today = dateGenerate.getTodayDate();
      let u = req.body.user;
      let c = req.body.cart;
      
      c.productId.forEach(element => { 
        prodCtrl.addDate(element);
        u.userProducts.forEach(product =>{ 
                                        
          if (JSON.stringify(product.prodId) == JSON.stringify(element)){          
            product.date.push(today);
          }
        });
        const found = u.userProducts.find(p => JSON.stringify(p.prodId) == JSON.stringify(element));
        if (typeof found === 'undefined'){ 
          var text = '{"prodId":'+JSON.stringify(element)+',"algRating":'+alg+',"date":["'+today+'"]}';
          let newProduct  = JSON.parse(text);
          u.userProducts.push(newProduct);
        }



      });
      let obj = await User.find({id : u.id}, (err) =>{if(err) throw err;});
      if(obj.length == 0) throw {
        message:   'no content' 
      };
      obj = obj[0];

      obj.userProducts = u.userProducts;
      obj.userCartHistory = u.userCartHistory

      await User.updateOne({id : u.id},obj, (err)=>{
        if(err) throw err;
      });
      res.status(200).json(obj);
    }catch(err){
     res.status(500).send(err);
    }  
};
    

// exports.getUserProducts = async (req, res) => {
//   try {
//     let docs = await User.find({id : req.body.id}, (err)=>{
//       if(err) throw err;
//     });
//     docs = docs[0];
// console.log(docs);
//     //let freq;
//     docs.userProducts.forEach(product => {
//       //console.log(product.date);
//        for(let i = 1;i < product.date.length; i++){
        
//            let date1 = new Date(product.date[i]);
//          //  let date2 = new Date(product.date[i]);
//            console.log(date1);
//        }
//           //  console.log(date1);
//       //   }
//         //   product.algRating = freq / product.date.length;

//         //  console.log(product.algRating);
//        });
//     docs.userProducts.sort((a, b) =>{
//       a.algRating - b.algRating
//     })
// //console.log(docs.userProducts);
//     await User.updateOne({id : req.body.id},docs, (err)=>{
//       if(err) throw err;
//     });
    
// res.status(200).send(docs);
//   }catch(err){
//     res.status(500).send(err);
//   } }
