const router = require('express').Router();
const userCtl = require('../controllers/user_ctrl');


router.get('/getAll', userCtl.getData);

router.get('/userGetByID/:id', userCtl.userGetByID);

router.put('/updateUserProd', userCtl.put_acceptToCart);

router.post('/login', userCtl.Login);



module.exports = router;