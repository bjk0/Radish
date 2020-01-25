var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
const router = require('express').Router();


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.post('/login', async(request, response)=> {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
        const docs = await User.find({username : req.params.user,
                                     password: req.params.password},
                                    (err)=>{if(err) throw err;});
         if (docs.length > 0){
                request.session.loggedin = true;
                request.session.username = username;
            } else {
				response.send('Incorrect Username and/or Password!');
			}		
			response.end();
		
	} else {
		response.send('Please enter Username and Password!');
            response.end();
        }
    });





        app.get('/home', function(request, response) {
            if (request.session.loggedin) {
                response.send('Welcome back, ' + request.session.username + '!');
            } else {
                response.send('Please login to view this page!');
            }
            response.end();
        });

        module.exports = router;