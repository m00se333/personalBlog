"use strict";

var express = require("express"),
	posts = require("./mock/posts.json");

var postsLists = Object.keys(posts).map(function(value){
	return posts[value]
	});

var app = express();

app.use("/static", express.static(__dirname + "/public"))

app.set("view engine", "jade");
app.set("views", __dirname + "/templates");

app.get("/", function(req, res){
	res.render("index");
});

app.get("/blog/:title?", function(req, res){
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.render("blog", {posts: postsLists});
	} else {
	var post = posts[title] || {};
	res.render("post", {post: post} );
	}
});

app.get("/about", function(req, res){
	res.render("about");
});
app.get("/projects", function(req, res){
	res.render("projects")
})

app.listen(4000, function(){
	console.log("Frontend server is running on port 4000.")
});