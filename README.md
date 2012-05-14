#Github Firehose NodeJS library

A library that will connect to github and emit events from the Github Event API in near-real-time

## Installation

* Clone this repo and then `npm install`
* Download the contents and then `npm install`
* Easiest! `npm install github-firehose`

## Usage

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

## Events

The events you can listen to with the `event` name are simply an object representing the data on http://developer.github.com/v3/events/