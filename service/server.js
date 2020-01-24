const express = require('express');
//const productCtl = require('./controllers/product_ctrl');
//const adminCtl = require('./controllers/admin_ctrl');
//const userCtl = require('./controllers/user_ctrl');
//const crtCtl = require('./controllers/cart_ctrl');
const user_route = require('./routers/userRoute');
const cart_route = require('./routers/cartRoute');
const prod_route = require('./routers/prodRoute');
const admin_route = require('./routers/adminRoute');



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


 
/** * All routes ***/
  app.use('/radish/users',user_route);   
  app.use('/radish/carts',cart_route);
  app.use('/radish/prod',prod_route);
  app.use('/radish/admins',admin_route);
 



app.listen(port, () => console.log(`listening on port ${port}`));

