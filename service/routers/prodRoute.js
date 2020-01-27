const router = require('express').Router();

const productCtl = require('../controllers/product_ctrl');


router.get('/getAll', productCtl.getData);

router.get('/getByID/:id', productCtl.getByID);

router.post('/create', productCtl.postProduct);

router.put('/update/:id', productCtl.putProduct);

router.delete('/delete/:id', productCtl.deleteProduct);

module.exports = router;