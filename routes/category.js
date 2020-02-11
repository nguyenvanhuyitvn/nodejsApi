const express = require('express');
const router = express.Router();
const { GetCategories } = require('../controllers/category-controller');

// get all departments
router.get('/getCategories', GetCategories);

module.exports = router;

// module.exports = function(app){
// 	const GetCategories = require('../controllers/category-controller');
// 	router.get('/getCategories', GetCategories.findAll);
// 	// app.route('/getCategories')
//  	//    .get(GetCategories.findAll);
//  	// app.get('/getCategories', GetCategories.findAll);
// }

