'use strict';
const database = require('./db.js');
// constructor
const Category = function(category){
	this.category_id = category.category_id;
	this.department_id = category.department_id;
	this.name = category.name;
	this.description = category.description;
};
Category.getCategories = (result) => {
	let query = `SELECT
					A.category_id,
					A.department_id,
					A.name,
					A.description'
				FROM category A
			ORDER BY category_id ASC`; 
	database.query(query, (err, res)=>{
		if(err){
            console.log("errors:", err);
            result(err, null);
        }else{
            console.log("Category: ", res);
            result(null, res);
            return;
        }
	}) 
}

module.exports = Category;