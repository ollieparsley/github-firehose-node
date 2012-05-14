//Include the firehose class
var Firehose = require('./github-firehose');

//Create a new instance
var firehose = new Firehose();

//Add error handler
firehose.on('error', function(e) {
	console.log('ERROR: ' . e.stack);
});

//Add event handler
firehose.on('event', function(event) {
	console.log('EVENT: ', event.id);
});

//Start consuming
firehose.start();