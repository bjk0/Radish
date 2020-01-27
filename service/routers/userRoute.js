const router = require('express').Router();
const userCtl = require('../controllers/user_ctrl');


router.get('/getAll', userCtl.getData);


router.get('/getByEmail:id', userCtl.getByName);

router.put('/updateUserProd/:userName', userCtl.put_acceptToCart);


router.post('/login', userCtl.Login)



module.exports = router;