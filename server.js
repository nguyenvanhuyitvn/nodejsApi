const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbConfig = require('./config/db.config.js');
const fileUpload = require('express-fileupload');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3001;
// configure middleware
app.set('port', process.env.port || port);
// parse request of content-type: application/json
app.use(bodyParser.json());
// parse request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Use upload file
app.use(fileUpload());
app.use(function (request, response, next){
	response.header("Access-Control-Allow-Origin","*");
	response.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
// import routes
// const departmentRoutes = require('./routes/department');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
// const shippingRoutes = require('./routes/shipping');
// const customerRoutes = require('./routes/customer');
// const orderRoutes = require('./routes/order');
// simple route
// app.get('/', function (request, response, next) {
//     db.query("SELECT * FROM category", function (error, rows) {
//         return response.json(rows);
//     });
// });

app.get('/', (req, res)=>{
    res.json({message: "Welcome to Bachkhoa Aptect application."});
});
// set routes to api
// app.use('/api/department', departmentRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
// app.use('/api/shipping', shippingRoutes);
// app.use('/api/customer', customerRoutes);
// app.use('/api/order', orderRoutes);
// set port, listen for request
app.listen(port, ()=>{
	console.log("server is running on port:" + port);
});
// var routes = require('./routes/category.js');
// routes(app);