"use strict";

var express = require("express"),
	posts = require("./mock/posts.json");

var app = express();

app.get("/", function(req, res){
	res.send("Making things happen");
});

app.get("/blog/:title?", function(req, res){
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.send("This page is under construction");
	} else {
	var post = posts[title];
	res.send(post);
	}
});

app.get("/about", function(req, res){
	res.send("<h1>About Page</h1>");
})

app.get("/projects", function(req, res){
	res.send("<h1>Projects Page</h1>")
})

app.listen(4000, function(){
	console.log("Frontend server is running on port 4000.")
});