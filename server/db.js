"use strict";

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/timeline-app', err => {

	if(err){
		console.error('Could not connect to MongoDB!');
		console.log(err);
	}
	else{
		console.log("\n\x1b[32mMongoDB \x1b[37mconnected.");
	}

});

module.exports = mongoose;
