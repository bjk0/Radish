const User = require('../models/user');
var bodyParser = require('body-parser');
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

exports.getData = async (req, res) => {
    try {
        const docs = await User.find({});
        return res.json(docs);
   
    } catch(err){
       console.log(`query error: ${err}`);
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
            message: "You are logged in!"
          });
        }
        }
    
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
