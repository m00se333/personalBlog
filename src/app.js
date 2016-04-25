"use strict";

var express = require("express");

var app = express();

app.get("/", function(req, res){
	res.send("Making things happen");
});

app.listen(4000, function(){
	console.log("Frontend server is running on port 4000.")
});