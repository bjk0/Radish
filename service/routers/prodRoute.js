const router = require('express').Router();

const productCtl = require('../controllers/product_ctrl');


router.get('/getAll', productCtl.getData);
  

module.exports = router;