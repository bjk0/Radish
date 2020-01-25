const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const user_route = require('./routers/userRoute');
const cart_route = require('./routers/cartRoute');
const prod_route = require('./routers/prodRoute');
const admin_route = require('./routers/adminRoute');
// const login = require('./login')


const app = express();
const port = process.env.PORT || 3001;//client on 3000

app.set('port', port);
app.use('/', express.static('./public')); // for API => not in use just example
app.use(
 (req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');//* = firebase.com
   res.header('Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept');
   res.set('Content-Type', 'application/json');
   next();
 });
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


 
/** * All routes ***/
  app.use('/users',user_route);   
  app.use('/carts',cart_route);
  app.use('/prod',prod_route);
  app.use('/admins',admin_route);
  // app.use('/login',login);
 



app.listen(port, () => console.log(`listening on port ${port}`));

