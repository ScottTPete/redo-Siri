var express = require('express')



var app = express() //initialize express


var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

function getRandomMessages () {
	var i = Math.floor(Math.random() * messages.length); //gets random message from messages and returns that message
	console.log(i);
	return messages[i];
}

app.options('/', function(req, res) {
	res.status(200).set({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'X-XSS-Protection': '1; mode=block',
		'X-Frame-Options': 'SAMEORIGIN',
		'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	}).send();
});


app.get('/', function(req, res, next) {
	console.log("YOU GOT MAIL")
	res.status(200).set({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'X-XSS-Protection': '1; mode=block',
		'X-Frame-Options': 'SAMEORIGIN',
		'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	}).send(JSON.stringify({
		message: getRandomMessages()
	}))
})






//SET UP PORT//
var port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log('Listening on port ' + port);
})