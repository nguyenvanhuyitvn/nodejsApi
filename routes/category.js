const express = require('express');
const router = express.Router();
const { GetCategories,
		CreateCategories } = require('../controllers/category-controller');

// get all Category
router.get('/getCategories', GetCategories);
router.post('/createCategories', CreateCategories);
module.exports = router;

