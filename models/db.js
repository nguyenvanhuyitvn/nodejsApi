'use strict';
const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');
// create a connection to the database
const connection = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB
	});

	// open the mySQL connection
	connection.connect(error => {
		if(error) {
			console.log("Error when connecting to database: ", error);
		}
		global.db = connection;
		console.log(`Successfully connected to the database ${dbConfig.HOST} >> ${dbConfig.DB}`);
	});
module.exports = connection;