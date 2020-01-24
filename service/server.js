const express = require('express');
const productCtl = require('./controllers/product_ctrl');
const adminCtl = require('./controllers/admin_ctrl');
const userCtl = require('./controllers/user_ctrl');
const crtCtl = require('./controllers/cart_ctrl');


const app = express();
const port = process.env.PORT || 3001;//client on 3000

app.set('port', port);
app.use('/', express.static('./public')); // for API => not in use jus example
app.use(
 (req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');//* = firebase.com
   res.header('Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept');
   res.set('Content-Type', 'application/json');
   next();
 });


 
/** * All routes ***/
   app.get('/radish/prod/get', productCtl.getData);
   app.get('/radish/admins', adminCtl.getData);
   app.get('/radish/users', userCtl.getData);
   app.get('/radish/carts', cartCtl.getData);

// app.get('/final-ideas/saveNewIdea', ideaCtl.saveData);
// app.get('/final-ideas/updateIdea', ideaCtl.updateData);
// app.get('/final-ideas/deleteIdea', ideaCtl.deleteData);

app.listen(port, () => console.log(`listening on port ${port}`));

