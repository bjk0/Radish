const router = require('express').Router();
const userCtl = require('../controllers/user_ctrl');


router.get('/getAll', userCtl.getData);


router.get('/getByEmail:id', userCtl.getByEmail);


router.post('/login', userCtl.Login)


module.exports = router;