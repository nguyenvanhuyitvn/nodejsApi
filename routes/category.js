const express = require('express');
const router = express.Router();
const { GetCategories } = require('../controllers/category-controller');

// get all Category
router.get('/getCategories', GetCategories);

module.exports = router;

