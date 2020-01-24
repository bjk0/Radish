const router = require('express').Router();
const userCtl = require('../controllers/user_ctrl');


router.get('/getAll', userCtl.getData);



module.exports = router;