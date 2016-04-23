// //APIs
// var admin = require('../app/data/admin-data.js'); 
// var waitinglist = require('../app/data/waitinglist-data.js'); 
// var table = require('../app/data/table-data.js');  

var path = require('path');


module.exports = function(app){
	//HTML Routes
	app.get('/', function(req, res){
	res.send("Welcome to the restaurant!");
	// res.sendFile(path.join(__dirname + '/addnew.html'));
	});

	app.get('/reserve', function(req, res){
		//res.send("Reservation");
		res.sendFile(path.join(__dirname + '/../app/public/reservation.html'));
	});

	app.get('/tables', function(req, res){
		res.send("tables");
		// res.sendFile(path.join(__dirname + '/table.html'));
	});

	app.get('/admin', function(req, res){
		res.send("admin");
		// res.sendFile(path.join(__dirname + '/addnew.html'));
	});

	// app.get('/addnew', function(req, res){
	// res.sendFile(path.join(__dirname + '/addnew.html'));
	// })

}
