const router = express.Router();
const {
	GetProducts,
	GetProductsAttributes,
	GetFilteredProducts,
	GetProductDetailsById
} = require('../controllers/product-controller');
// get All product
router.get('/getProducts', GetProducts);
// Get product related attributes
router.get('/getProductsAttributes', GetProductsAttributes);
// get all filtered products
router.post('/getFilteredProducts',GetFilteredProducts);
// get product details by product_id
router.get('/getProductDetails', GetProductDetailsById);

module.exports = router; 