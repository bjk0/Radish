const router = require('express').Router();

const productCtl = require('../controllers/product_ctrl');


router.get('/getAll', productCtl.getData);

router.get('/getByID:id', productCtl.getByID);


module.exports = router;