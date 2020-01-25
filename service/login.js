var express = require('express');

var path = require('path');
var app = express();
const router = require('express').Router();


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

console.log("loginSucc");

app.post('/login', (request, response)=> {
	var username = request.body.userName;
    var password = request.body.password;
    console.log("loginSucc");

	if (username && password) {
        const docs =  User.find({userName : request.body.userName,
                                     password: request.body.password},
                                    (err)=>{if(err) throw err;});
         if (docs.length > 0){
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
                console.log("loginSucc");
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