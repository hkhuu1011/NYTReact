// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Articles Schema
var Article = require("./models/Article");

// Initialize Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static dir
app.use(express.static("public"));

//-----------------------------------------------------------

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

//----------------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
// app.get("/api", function(req, res) {
// 	Article.create({
// 		title: req.body.title,
// 		date: req.body.date,
// 		link: req.body.link
// 	})
// });





// Listen on port 3000
app.listen(PORT, function() {
    console.log("App running on port 3001!");
});