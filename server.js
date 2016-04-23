// Dependencies 
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



//APIs
// var admin = require('./app/data/admin-data.js'); 
// var waitinglist = require('./app/data/waitinglist-data.js'); 
// var table = require('./app/data/table-data.js');  


// Creates an instance of "express server"
var app = express();
var PORT = 3000;


// Incorporate body-parser middleware
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json

// Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


//routes
// app.get('/', function(req, res){
// 	res.send("Welcome to the restaurant!");
// });

// app.get('/reserve', function(req, res){
// 	res.send("Reservation");
// });

// app.get('/tables', function(req, res){
// 	res.send("tables");
// });

// app.get('/admin', function(req, res){
// 	res.send("admin");
// });

//POST REQUEST
//table



// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
})