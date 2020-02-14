
    
const express = require('express');
const router = express.Router();
const { 
    GetProducts,
    GetProductDetailsById,
    CreateProduct
 } = require('../controllers/product-controller');

//get all Product
router.get('/getProducts', GetProducts);

// get product details by product id
router.get('/getProductDetails', GetProductDetailsById);
// create product
router.post('/createProduct', CreateProduct);


module.exports = router;