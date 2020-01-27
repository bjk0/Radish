const {User , UserProduct} = require('../models/user');

var bodyParser = require('body-parser');
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.getData = async (req, res) => {
    try {
        const docs = await User.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
    }  
};

exports.getByName = async (req, res) =>  {
  try {
  const docs = await User.find({email : req.body.userName}, (err)=>{
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
}
    



exports.put_acceptToCart = async (req, res) => {
  try{
      var alg = 1;
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

      let u = req.body.user;
      let c = req.body.cart;
      
    //  console.log(u.userProducts);
     // console.log(c.productId);

      c.productId.forEach(element => { 
        u.userProducts.forEach(product =>{ 
                                         //  console.log(product.prodId);
          if (JSON.stringify(product.prodId) == JSON.stringify(element)){          
          //  console.log(element);
            product.date.push(today);
          //  console.log(u.userProducts);
          }
        });
      const found = u.userProducts.find(p => JSON.stringify(p.prodId) == JSON.stringify(element));
      if (typeof found === 'undefined'){ 
        console.log("hello");
        var text = '{"prodId":'+JSON.stringify(element)+',"algRating":'+alg+',"date":["'+today+'"]}';
        let newProduct  = JSON.parse(text);
          console.log("hello2");
         // console.log(newProduct);
          u.userProducts.push(newProduct);
      }
      
      });


      console.log(u);

     let obj = await User.find({userName : req.params.userName}, (err) =>{if(err) throw err;});
console.log(obj);
    // if(obj.length == 0) throw {
    //     message:   'no content' 
    // };
    // console.log(obj);
    // obj = obj[0];
    // obj = u;

    await User.updateOne({userName : req.params.userName},obj, (err)=>{
       if(err) throw err;
   })

      res.status(200).json(u);
    }catch(err){
     res.status(500).send(err);
} 
};
    /*
            app.get('/home', function(request, response) {
                if (request.session.loggedin) {
                    response.send('Welcome back, ' + request.session.username + '!');
                } else {
                    response.send('Please login to view this page!');
                }
                response.end();
            });
    */
