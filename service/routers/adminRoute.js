const router = require('express').Router();
const adminCtl = require('../controllers/admin_ctrl');


router.get('/gaeAll', adminCtl.getData);
  

 module.exports = router;