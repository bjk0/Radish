const router = require('express').Router();

const productCtl = require('../controllers/product_ctrl');


router.get('/', productCtl.getData);

router.get('/:id', productCtl.getByID);

router.post('/', productCtl.postProduct);

router.put('/:id', productCtl.putProduct);

router.delete('/:id', productCtl.deleteProduct);

module.exports = router;