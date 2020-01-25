const router = require('express').Router();
const userCtl = require('../controllers/user_ctrl');


router.get('/getAll', userCtl.getData);
router.post('/login', userCtl.Login)


module.exports = router;