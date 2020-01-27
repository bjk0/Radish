const router = require('express').Router();
const cartCtl = require('../controllers/cart_ctrl');

router.get('/getAll', cartCtl.getData);


router.post('/create', cartCtl.postCart);




module.exports = router;