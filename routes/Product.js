const express = require('express');
const router = express.Router();

const { save, list, productFindId, update, deleted } = require('../controllers/Product');

router.get('/product', list);
router.get('/product/:id', productFindId);

router.post('/product', save);

router.put('/product/:id', update);

router.delete('/product/:id', deleted);


module.exports = router