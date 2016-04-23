//APIs
var admin = require('../app/data/admin-data.js'); 
var waitinglist = require('../app/data/waitinglist-data.js'); 
var table = require('../app/data/table-data.js');  

var path = require('path');


module.exports = function(app){
	//API Routes
	app.get('/API/tables', function(req, res){
		res.json(table);
	});

	app.get('/API/waitinglist', function(req, res){
		res.json(waitinglist);
	});

	app.get('/API/admin', function(req, res){
		res.json(admin);
	});


	app.post('/API/tables', function(req,res){
	if(table.length < 11){
		table.push(req.body);
		console.log(req.body);
		res.json(true);
	} else {
		waitinglist.push(req.body);
		res.json(false);
		}
	});

	// console.log(req.body);
	// table.push(req.body);
	// res.send("table");
	// });

	// app.post('/API/waitinglist', function(req,res){
	// console.log(req.body);
	// table.push(req.body);
	// res.send("waitinglist");
	// });

	app.post('/API/admin', function(req,res){
	console.log(req.body);
	admin.push(req.body);
	res.send("admin");
	});



}
