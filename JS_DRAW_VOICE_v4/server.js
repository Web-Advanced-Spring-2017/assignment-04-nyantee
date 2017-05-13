
var express = require('express');
//importing the package or module express 
//require is a javascript function that makes the express application


var app = express();
/////////
var server = app.listen(3000);

console.log("my first socket server is running");


app.use(express.static('public')); //static hosts files that arent changing not dynamic 

var socket = require('socket.io');

///////
var io = socket(server);
//////
//keeps track of inputs and outputs - server is an argument of socket the library 

//first event if i have a new connection
// other events i am connected, here's a message, i'm disconnected 




io.sockets.on('connection', Connection);

console.log('connection was made');

function Connection(socket){


	console.log('first connection:' + socket.id);
	socket.on('soundTx', broadcastSound); // if there is a message called mouse trigger this function

	function broadcastSound(data){ 
	socket.broadcast.emit('soundRx', data);
	// console.log('sound data:' + data.x);
	}
}









	

