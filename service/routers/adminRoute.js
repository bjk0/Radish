const router = require('express').Router();
const adminCtl = require('../controllers/admin_ctrl');


router.get('/getAll', adminCtl.getData);
  

 module.exports = router;