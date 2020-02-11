'use strict';
const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');
// create a connection to the database
// function handleDisconnect(){
// 	const connection = mysql.createConnection({
// 	host: dbConfig.HOST,
// 	user: dbConfig.USER,
// 	password: dbConfig.PASSWORD,
// 	database: dbConfig.DB
// 	});

// 	// open the mySQL connection
// 	connection.connect(error => {
// 		if(error) {
// 			console.log("Error when connecting to database: ", err);
// 			setTimeout(handleDisconnect,2000);
// 		}
// 		global.db = connection;
// 		console.log(`Successfully connected to the database ${dbConfig.HOST} >> ${dbConfig.DB}`);
// 	});
// 	connection.on('error', function(err){
// 		console.log('db error', err);
// 		handleDisconnect();
// 	});
// }
// handleDisconnect();
const connection = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB
	});

	// open the mySQL connection
	connection.connect(error => {
		if(error) {
			console.log("Error when connecting to database: ", err);
		}
		global.db = connection;
		console.log(`Successfully connected to the database ${dbConfig.HOST} >> ${dbConfig.DB}`);
	});
module.exports = connection;